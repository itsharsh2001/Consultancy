import dotenv from 'dotenv'
dotenv.config();
import User from '../../../models/users.js'
import dbConnect from '../../../lib/dbConnect.js'
import crypto from 'crypto'
import mail from '@sendgrid/mail';


mail.setApiKey(process.env.SENDGRID_API_KEY)

dbConnect();

const message = 
<div>
    <h1>You are requested for password reset</h1>
<h3>Click in this <a href="http://localhost:3000/update-password/${token}">Link</a> to reset password</h3>
</div>

export default async (req, res) => {
    const { method } = req;

    switch (method) {

        case 'POST':
            const {email} = req.body;

            crypto.randomBytes(32,(err,buffer) => {
                if(err){
                    console.log(err);
                }
                const token = buffer.toString('hex');
        
                User.findOne({email: email}).then(user=>{
                    if(!user){
                        return res.status(422).json({message:"User does not exist"})
                    }
                    user.resetToken = token;
                    user.expireToken = Date.now() + 3600000;

                        user.save().then((result)=>{
                        const data = {
                        to: email,
                        from:'gouravkapoor232323@gmail.com',
                        subject:'Password Reset',
                        text:'message',
                        html: message
                    }
        
                    mail.send(data);
                })

                res.status(200).json({message: "Check your email"})
        
                })
            })
            break;
        default:
            res.status(400).json({ message: "error" })
    }
}
