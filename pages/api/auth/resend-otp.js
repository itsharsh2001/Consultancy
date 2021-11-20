import dotenv from 'dotenv'
dotenv.config();
import Otp from '../../../models/otp.js';
import OtpGenerator from 'otp-generator';
import mail from '@sendgrid/mail';
import fast2sms from 'fast-two-sms';


mail.setApiKey(process.env.SENDGRID_API_KEY)

async function handler(req, res) {
    const { method } = req;

    switch (method) {

        case 'POST':
            try {

               const {email , phone} = req.body;
               
               const otpExpired = await Otp.findOne({email:email});

               if(otpExpired) {
                   return res.status(500).json({message:"Please check Your otp on email"})
               }

               //generate new otp
               let otpCode = OtpGenerator.generate(6, {
                alphabets: false,
                specialChars: false,
                upperCase: false,
            });

            const otpData = new Otp({
                email:email,
                otp:otpCode
            })
            
            await otpData.save();

            const data = {
                to:email,
                from:'gouravkapoor232323@gmail.com',
                subject:'Otp',
                text:'message',
                html: `<h1>please verify your email using this otp : ${otpCode}</h1>`
            }

            mail.send(data);

            try{
             await fast2sms.sendMessage({authorization: process.env.MOBILE_API_KEY,message:`<h1>please verify your email using this otp : ${otpCode}</h1>`,
            numbers:[phone]
        })
    }catch(err){
        console.log(err);
    }

            

                res.status(200).json({ message: "done" })

            } catch (error) {
                res.status(400).json({ message: "error is occuring" })
            }
            break;
        default:
            res.status(400).json({ message: "error" })

    }

}

export default handler;