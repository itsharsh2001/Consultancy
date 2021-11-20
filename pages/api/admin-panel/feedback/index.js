import dbConnect from '../../../../lib/dbConnect.js'
import Clients from '../../../../models/clients.js'
import Feedback from '../../../../models/feedback.js'
import { getSession } from 'next-auth/client'

dbConnect();


export default async (req, res) => {
    const { method } = req;

    switch (method) {

        case 'POST':

            const {message} = req.body;

            const sessionOfUser = await getSession({req:req});

            if(!sessionOfUser){
              return  res.status(422).json({message:"failed"})
            }

            const emailOfUser = sessionOfUser.user.email;

            const feedbackOfUser = await Feedback.create({
                email:emailOfUser,
                feedback:message
            })

            await feedbackOfUser.save();

            res.status(200).json({ message: "done" })

            break;
        default:
            res.status(400).json({ message: "error" })
    }
}
