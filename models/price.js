var mongoose = require('mongoose');

const PriceSchema = new mongoose.Schema({
    serviceName:{
        type:String,
        require:true
    },
    planPrice:{
        basicPlan:{
            type:String,
            require:true
        },
        smartPlan:{
            type:String,
            require:true
        },
        megaPlan:{
            type:String,
            require:true
        }
    },
    document:[
        {
            name:{
                type:String,
                require:true
            }
        }
    ]

});

module.exports = mongoose.models.Price || mongoose.model("Price", PriceSchema);