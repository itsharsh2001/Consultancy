import dbConnect from '../../../../lib/dbConnect.js'
const Razorpay = require('razorpay')
import crypto from 'crypto'
import bodyParser from 'body-parser'
import LegalForm from '../../../../models/legalForms.js'
import Clients from '../../../../models/clients.js'
import PayUsers from '../../../../models/PayUsers.js'
import Documents from '../../../../models/document.js'


dbConnect();

async function handler(req, res) {
    const { method } = req;

    switch (method) {

        case 'POST':
            bodyParser.json(req.body)
            try {
                const secret = '12345678';
                const data = req.body

                const shasum = crypto.createHmac('sha256',secret);
                shasum.update(JSON.stringify(req.body));
                const digest = shasum.digest('hex');

                if(digest==req.headers['x-razorpay-signature']){
                    
                    const payUserComplete = await PayUsers.findOne({orderIdNumber:data.payload.payment.entity.order_id})

                    payUserComplete.isCompleted = true;
                    payUserComplete.status = "pending";

                    await payUserComplete.save();

                    const client = await Clients.create({
                        email:payUserComplete.email,
                        orderId:data.payload.payment.entity.order_id,
                        status:"pending",
                        isCompleted:true
                    })

                    await client.save();

                    const legalFormData = await LegalForm.create({
                        orderId:data.payload.payment.entity.order_id,
                        email:data.payload.payment.entity.email,
                        update:"There are no document drafting or document reviewing orders"
                    })

                    await legalFormData.save;

                    const documentsData = await Documents.create({
                        orderId:data.payload.payment.entity.order_id,
                        email:data.payload.payment.entity.email,
                        message:"Please Submit All the Required Documents"
                    })

                    await documentsData.save;

                }else{
                        res.status(422).json("error")
                }
                
                res.json({status:'ok'});

            } catch (error) {
                res.status(422).json({ message: "error is occuring" })
            }
            break;
        default:
            res.status(400).json({ message: "error" })

    }

}

export default handler;