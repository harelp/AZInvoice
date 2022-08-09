const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
    userId: String,
    invoiceId: String,
    pickUpDate: Date,
    dropOffDate: Date,
    pickUpDestination: String,
    dropOffDestination: String,
    loadPrice: Number,
    debit: Boolean,
    credit: Boolean
})


const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;