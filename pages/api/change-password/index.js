import User from '../../../models/users.js';
import dbConnect from '../../../lib/dbConnect.js'
import { getSession } from 'next-auth/client'
import bcrypt from 'bcryptjs'

dbConnect();

export default async(req,res) => {
    const { method } = req;
    
    switch(method){

        case 'PATCH':
            const {oldPassword,newPassword} = req.body;

            if(!oldPassword || !newPassword){
                res.status(400).json({message:'Fill all the Fields'})
            }

           const session = await getSession({req:req})

           if(!session){
               return res.status(422).json({message:"Not Authenticated"});
           }

           const email = session.user.email;
           console.log(email);

        const findEmail = await User.findOne({email:email});

        if(!findEmail){
            return res.status(422).json({message:"User not found"})
        }

        const verifyPassword = await bcrypt.compare(oldPassword, findEmail.password);
        
        if(!verifyPassword){
            return res.status(422).json({message:"your password is not matching"})
        }

        const hashedPassword = await bcrypt.hash(newPassword,12);

        const setPassword = await User.updateOne({email:email},{$set: {password:hashedPassword}});

      res.status(200).json({message:"password updated successfully"})



            break;
        default:
            res.status(400).json({success:false})
    }
}



