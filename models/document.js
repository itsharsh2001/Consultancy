var mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    email: {
        type: String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
    orderId:{
        type:String,
        require:true
    },                       
    documents:[
        {
            nameOfDocument: {
                type:String,
                require:true
            },
            image:{
                type:String,
                require:true
            },
            topic:{
                type:String,
                require:true
            }
        }
    ]
});

module.exports = mongoose.models.Document || mongoose.model("Document", documentSchema);