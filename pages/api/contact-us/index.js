import Query from '../../../models/query.js';
import dbConnect from '../../../lib/dbConnect.js'

dbConnect();

export default async(req,res) => {
    const { method } = req;
    
    switch(method){

        case 'POST':
            try {

                const {name, email, phone, subject, message} = req.body;

                const newQuery = new Query({
                    name:name,
                    email:email,
                    phone:phone,
                    subject:subject,
                    message:message
                })

                await newQuery.save();

                res.status(200).json({message:"ok"})
                
            } catch (error) {
                res.status(400).json({message:"error"})
            }
            break;
        default:
            res.status(400).json({message:"error"})
    }
}
