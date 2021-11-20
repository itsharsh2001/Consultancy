require('dotenv').config();
import LegalForms from '../../../../models/legalForms.js'
import dbConnect from '../../../../lib/dbConnect.js'
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

            const findEmail = await LegalForms.findOne({
                email:email
            });

            if(!findEmail){
                return res.status(422).json({ message:false })
            }

            res.status(200).json({
                message:true,
                update:findEmail.update
            })
            

            break;
        default:
            res.status(400).json({ message: "error" })
    }
}


