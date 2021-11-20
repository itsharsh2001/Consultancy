import Otp from '../../../models/otp.js';
import dbConnect from '../../../lib/dbConnect.js';
import User from '../../../models/users.js';

dbConnect();

async function handler(req, res) {
    const { method } = req;

    switch (method) {

        case 'POST':
            try {

                const { email, otp } = req.body;

                const checkForOtp = await Otp.findOne({ email: email });
                
                if (!checkForOtp) //if otp is not present
                {
                    return res.status(500).json({ message: "otp Expired" });
                }

                
                if (checkForOtp.otp !== otp) //otp entered is incorrect
                {
                    return res.status(500).json({ message: "Wrong Otp" });
                }


                const verifiedUser = await User.findOne({email: checkForOtp.email})

                if(verifiedUser.isverified){
                    return res.status(400).json({message:"Already verified"})
                }


                verifiedUser.isverified = true;

                verifiedUser.save();

                await Otp.deleteOne({ email: checkForOtp.email });


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