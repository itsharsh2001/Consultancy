import User from '../../../models/users.js';
import Price from '../../../models/price.js';
import Razorpay from 'razorpay'
import PayUsers from '../../../models/PayUsers.js'
import { getSession } from 'next-auth/client'
import dbConnect from '../../../lib/dbConnect.js'
import dotenv from 'dotenv'
dotenv.config();

dbConnect();


function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
    {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

async function handler(req, res) {
    const { method } = req;

    switch (method) {

        case 'POST':
            try {

                const {phone,planName,topic} = req.body;

                const session = await getSession({req:req});

                if(!session){
                  return  res.status(422).json({message:"failed"})
                }

                const email = session.user.email;

                const emailInUser = await User.findOne({email:email});



                if(!emailInUser){
                    return res.status(422).json({message:"user not found"})
                }

                const entity = await Price.findOne({
                    serviceName:topic
                })

                
                const dbTypePlan = camelCase(planName);
                var amount

                if(dbTypePlan==='basicPlan'){
                    amount = entity.planPrice.basicPlan
                 
                }

                else if(dbTypePlan==='megaPlan'){
                    amount = entity.planPrice.megaPlan
                }

                else if (dbTypePlan==='smartPlan'){
                    amount = entity.planPrice.smartPlan
                }

                const razorpay = new Razorpay({ key_id: process.env.RAZORPAY_API_KEY, key_secret: process.env.RAZORPAY_API_KEY_SECRET })

                const options = {
                    amount : amount*100,
                    payment_capture : 1,
                    currency : 'INR',
                    receipt : `${planName} -> ${amount}Rs -- Thank You`
                }

                    const response = await razorpay.orders.create(options)

                                                        


                    const saveId = await PayUsers.create({
                        orderIdNumber: response.id,
                        email:email,
                        phone:phone,
                        planName:planName,
                        paid:amount,
                        topic:topic
                    })



                    await saveId.save()
                    
                    res.status(200).json({
                        orderid:response.id,
                        orderreceipt:response.receipt,
                        ordercurrency:response.currency,
                        orderamount:response.amount,
                        orderemail:email,
                        orderphone:phone,
                        ordername:emailInUser.name,
                    })

            } catch (error) {
                res.status(422).json({ message: error })
            }
            break;
        default:
            res.status(400).json({ message: "error" })

    }

}

export default handler;