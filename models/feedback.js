var mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    email: {
        type: String,
        require:true
    },
    feedback:{
        type:String,
        require:true
    }
});

module.exports = mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);