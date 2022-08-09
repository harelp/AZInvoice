const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    userId: String,
    companyName: String,
    companyAddress: String,
    companyNumber: Number,
    companyEmail: String,
})


const Company = mongoose.model('Company', companySchema);
module.exports = Company;