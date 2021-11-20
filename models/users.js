import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
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
    password: {
        type: String,
        require:true
    },
    isverified: {
        type: Boolean,
        default : false
    },
    resetToken: String,
    expireToken: Date
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);

