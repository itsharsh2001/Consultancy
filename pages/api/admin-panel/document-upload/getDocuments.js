import dbConnect from '../../../../lib/dbConnect.js'
import Price from '../../../../models/price.js'
import { getSession } from 'next-auth/client'

dbConnect();


export default async (req, res) => {
    const { method } = req;

    switch (method) {

        case 'POST':

            const {serviceName} = req.body;

            console.log(serviceName)

            const sessionOfUser = await getSession({req:req});

            if(!sessionOfUser){
              return  res.status(422).json({message:"failed"})
            }

            const price = await Price.findOne({serviceName: serviceName})
            res.status(200).json({ document: price.document, name:price.serviceName })

            break;
        default:
            res.status(400).json({ message: "error" })
    }
}
