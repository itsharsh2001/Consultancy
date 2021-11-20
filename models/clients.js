var mongoose = require('mongoose');

const ClientsSchema = new mongoose.Schema({
    email:{
        type: String,
        require:true
    },
    orderId: {
        type: String,
        require:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.models.Clients || mongoose.model("Clients", ClientsSchema);

