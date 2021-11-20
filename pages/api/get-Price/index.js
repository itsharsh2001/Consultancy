import Price from '../../../models/price.js'
import dbConnect from '../../../lib/dbConnect.js'


dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {

        case 'POST':

            const { serviceName } = req.body;

            const entity = await Price.findOne({serviceName: serviceName})

            res.status(200).json({
                message:true,
                data:entity
            })
            
            break;
        default:
            res.status(400).json({ message: "error" })
    }
}
