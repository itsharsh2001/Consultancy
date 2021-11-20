var mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    }
});

module.exports = mongoose.models.Query || mongoose.model("Query", querySchema);