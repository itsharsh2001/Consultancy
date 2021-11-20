import dbConnect from '../../../lib/dbConnect.js'
import LegalDrafting from '../../../models/legalDrafting.js';


dbConnect();


export default async (req, res) => {
    const { method } = req;

    switch (method) {

        case 'POST':
            try {

                
                var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

                const {name,email,phone,inquiry} = req.body;


                if(name.length==0 || email.length==0 || phone.length==0 || inquiry.length==0){
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

                const newInquiry = new LegalDrafting({
                    name: name,
                    email: email,
                    phone: phone,
                    inquiry: inquiry
                })

                await newInquiry.save();

                res.status(200).json({ message: "done" })

            } catch (error) {
                res.status(400).json({ message: "error" })
            }
            break;
        default:
            res.status(400).json({ message: "error" })
    }
}
