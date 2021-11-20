import dotenv from 'dotenv'
dotenv.config();
import User from '../../../../models/users.js';
import dbConnect from '../../../../lib/dbConnect.js'
import bcrypt from 'bcryptjs';
import OtpGenerator from "otp-generator";
import OtpDb from '../../../../models/otp.js'
import mail from '@sendgrid/mail';
import fast2sms from 'fast-two-sms';
import { getSession } from 'next-auth/client'


mail.setApiKey(process.env.SENDGRID_API_KEY)


dbConnect();


export default async (req, res) => {
    const { method } = req;

    switch (method) {

        case 'GET':

            const session = await getSession({req:req});

            if(!session){
                return res.status(422).json({
                    message:"user is not authenticated"
                })
            }

            const email = session.user.email;

            const findEmail = await User.findOne({email:email});

            if(!findEmail){
                return res.status(422).json({
                    message:"user not found"
                })
            }
        
            res.status(200).json({
                name:findEmail.name,
                email:findEmail.email,
                phone:findEmail.phone
            })
            break;

        case 'POST':
            try {

                var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

                const { name, email, phone, password } = req.body;

                if(name.length==0 || email.length==0 || phone.length==0 || password.length==0){
                    return res.status(500).json({ message: "Please Fill all the Fields" });
                }

      

                if(name.length<3){
                    return res.status(500).json({ message: "Please Enter Valid Name" });
                }

                var valid = emailRegex.test(email);

                if(!valid){
                    return res.status(500).json({ message: "Please Enter Valid Email" });
                }

                if(phone.length!=10){
                    return res.status(500).json({ message: "Please Enter Valid Phone Number" });
                }

                if(password.length<=6){
                    return res.status(500).json({ message: "Please make Password Of more than 6 Character" });
                }

                const checkUser = await User.findOne({ email: email })

                if (checkUser) {
                    return res.status(500).json({ message: "User already registered" });
                }

                const hashedPassword = await bcrypt.hash(password, 12)


                const newUser = new User({
                    name: name,
                    email: email,
                    phone: phone,
                    password: hashedPassword
                })

                await newUser.save();

                //generate new otp
                let otpCode = OtpGenerator.generate(6, {
                    alphabets: false,
                    specialChars: false,
                    upperCase: false,
                });

                const otpData = new OtpDb({
                    email:email,
                    otp:otpCode
                })
                
                await otpData.save();

                const message = <h1>Please Verify Your Email Using The OTP : {otpCode}</h1>

                const data = {
                    to:email,
                    from:'gouravkapoor232323@gmail.com',
                    subject:'Otp',
                    text:'message',
                    html: message
                }

                mail.send(data);

                try{
                 await fast2sms.sendMessage({authorization: process.env.MOBILE_API_KEY,message:message,
                numbers:[phone]
            })
        }catch(err){
            console.log(err);
        }

                res.status(200).json({ message: "done" })

            } catch (error) {
                res.status(400).json({ message: "error" })
            }
            break;
        default:
            res.status(400).json({ message: "error" })
    }
}
