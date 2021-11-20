require('dotenv').config();
import dbConnect from '../../../../lib/dbConnect.js'
import { getSession } from 'next-auth/client'
import PayUsers from '../../../../models/PayUsers.js'
import Clients from '../../../../models/clients.js'

dbConnect();


export default async (req, res) => {
    const { method } = req;

    switch (method) {

        case 'GET':

            const session = await getSession({req:req});

            if(!session){
              return  res.status(422).json({message:false})
            }

            const email = session.user.email;

            const payUserdetail = await PayUsers.find({email:email,
            isCompleted: true
            });

            if(payUserdetail.length==0){
                return  res.status(422).json({message:false})
              }
              
            const orderId = payUserdetail;
            
            res.status(200).json({
                orderData:orderId,
                message:true
            })


            break;
        default:
            res.status(400).json({ message: "error" })
    }
}
