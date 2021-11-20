var mongoose = require('mongoose');

const PayUsersSchema = new mongoose.Schema({
    orderIdNumber:{
        type: String,
        require:true
    },
    topic:{
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    phone: {
        type: String,
        require:true
    },
    planName:{
        type:String,
        require:true
    },
    paid:{
        type:Number,
        require:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },status:{
        type: String,
        require:true
    },
});

module.exports = mongoose.models.PayUsers || mongoose.model("PayUsers", PayUsersSchema);