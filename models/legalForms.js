var mongoose = require('mongoose');

const LegalFormsSchema = new mongoose.Schema({
    orderId:{
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    update:{
        type: String,
        require:true
    }
});

module.exports = mongoose.models.Legalform || mongoose.model("Legalform", LegalFormsSchema);