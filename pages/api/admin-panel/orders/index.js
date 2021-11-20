require('dotenv').config();
import dbConnect from '../../../../lib/dbConnect.js'
import PayUsers from '../../../../models/payUsers.js'
import { getSession } from 'next-auth/client'

dbConnect();


export default async (req, res) => {
    const { method } = req;

    switch (method) {

        case 'GET':

            const session = await getSession({req:req});

            if(!session){
              return  res.status(422).json({message:"failed"})
            }

            const email = session.user.email;

            const findEmail = await PayUsers.find({
                email:email,
                status:"pending"
            });
            
            if(!findEmail) {
                return res.status(422).json({message:false})
            }

            if(findEmail.length==0){
                return res.status(422).json({message:false})
            }

                res.status(200).json({
                    orderData:findEmail,
                    message:true,
                    total:findEmail.length
                })

            break;
        default:
            res.status(400).json({ message: "error" })
    }
}
