import dbConnect from '../../../../lib/dbConnect.js'
import Documents from '../../../../models/document.js'
import { getSession } from 'next-auth/client'

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {

        case 'GET':
          const sessionOfUser = await getSession({req:req});

       
          if(!sessionOfUser){
            return  res.status(422).json({message:"failed"})
          }

          const emailOfUser = sessionOfUser.user.email;

          const documents = await Documents.findOne({email:emailOfUser})

          if(!documents){
              return res.status(200).json({message:''});
          }

        return res.status(200).json({message:documents})

        break;


        default:
            res.status(400).json({ message: "error" })
      
    }


    }

