const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
    userId: String,
    tripId: String,
    company: Object,
    contractorName: String,
    tripStartDate: Date,
    tripEndDate: Date,
    invoices: Object,
    invoicesTotal: Number,
    deductions: Object,
    tripTotal: Number, 
    totalSumPaid: Number
})


const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;