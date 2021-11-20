import dbConnect from '../../../../lib/dbConnect.js'
import Documents from '../../../../models/document.js'
import PayUsers from '../../../../models/PayUsers.js'
import { getSession } from 'next-auth/client'
import AWS from 'aws-sdk'
import {nanoid} from 'nanoid'

dbConnect();

const awsConfig = {
    accessKeyId : process.env.AWS_KEY_ID,
    secretAccessKey : process.env.AWS_SECRET_KEY,
    region:process.env.AWS_REGION,
    apiVersion:process.env.AWS_API_VERSION,
  }
  const S3 = new AWS.S3(awsConfig)


export default async (req, res) => {
    const { method } = req;

    switch (method) {

        case 'POST':

          const {nameOfDocument, image, topic } = req.body;

          if(!nameOfDocument || !image || !topic){
            return res.status(400).json({message:'Upload Document First'})
          }


          const sessionOfUser = await getSession({req:req});

       
          if(!sessionOfUser){
            return  res.status(422).json({message:"failed"})
          }

          const emailOfUser = sessionOfUser.user.email;
          const orderId = await PayUsers.findOne({email:emailOfUser,isCompleted:true,topic:topic})

          const orderInDocument = await Documents.findOne({orderId:orderId.orderIdNumber})


          for(let i = 0 ; i<orderInDocument.documents.length; i++){
              if(orderInDocument.documents[i].nameOfDocument == nameOfDocument){
                  return res.status(400).json({message:'already submitted'})
              }
          }

          // we are removing extra part in image
    const base64Data = new Buffer.from(image.replace(/^data:image\/\w+;base64,/,''),'base64');

    // we are getting jpeg
    const type = image.split(';')[0].split('/')[1];

    // image params
    const params = {
      Bucket:'souravclient',
      Key:`${nanoid()}.${type}`,
      Body:base64Data,
      ACL: 'public-read',
      contentEncoding: 'base64',
      ContentType: `/image/${type}`
    }

    // upload to S3
    S3.upload(params, async (err,data)=>{
      if(err){
        console.log(err)
       return res.status(400).json({message:'error'})
      }

      const savedData = {
        nameOfDocument:nameOfDocument,
        image:data.Location,
        topic:topic
    }

      orderInDocument.documents.push(savedData)

      await orderInDocument.save();

      return res.status(200).json({message:'document submitted'})
      
    })

            break;
        default:
            res.status(400).json({ message: "error" })
    }
}
