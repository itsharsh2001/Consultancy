import User from '../../../models/users.js'
import dbConnect from '../../../lib/dbConnect.js'
import bcrypt from 'bcryptjs'

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {

        case 'POST':
            
        const {password, token} = req.body;

        if(password.length<=6){
            return res.status(500).json({message:"Please make password of more than 6 characters"})
        }

        User.findOne({resetToken:token, expireToken:{$gt:Date.now()}}).then(user=>{
            if(!user){
                return res.status(422).json({message:"Link is expired"})
            }
           bcrypt.hash(password,12).then(hashedPassword=>{
               user.password = hashedPassword;
               user.resetToken = undefined;
               user.expireToken = undefined;
               user.save().then((saveduser)=>{
                res.status(200).json({message:"done"});
               })
           })
        }).catch(err=>{
            res.status(200).json({message:"error"});
        })

        break;
        default:
            res.status(400).json({ message: "error" })
    }
}
