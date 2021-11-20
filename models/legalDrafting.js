var mongoose = require('mongoose');

const legalSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    phone:{
        type: Number,
        require:true
    },
    inquiry:{
        type:String,
        require:true
    }
});

module.exports = mongoose.models.Legal || mongoose.model("Legal", legalSchema);