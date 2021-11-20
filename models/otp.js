var mongoose = require('mongoose');

const OtpSchema = new mongoose.Schema({
    email : {
        type: String,
        require: true
    },
    otp : {
        type: String,
        require: true,
    }
    ,

    createdAt: { type: Date, expires: "5m", default: Date.now },
});

module.exports = mongoose.models.Otp || mongoose.model("Otp", OtpSchema);