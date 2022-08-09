const express = require('express');
const invoiceController = require('../controllers/invoiceController');
const router = express.Router();

router
.route('/admin/:id') // -> protected route and restricted 
.patch(invoiceController.updateInvoice)
.delete(invoiceController.deleteInvoice);
router.get('/allTrips', invoiceController.allInvoices) // -> protected route and restricted 

router.post('/createInvoice', invoiceController.createInvoice);
router.get('/getInvoice', invoiceController.getInvoice)
//router.patch('/updateInvoice', tripController.updateMe); // -> udpates 1 trip at a time
//router.delete('/deleteInvoice', tripController.deleteMe) // -> deletes 1 trip at a time


module.exports = router;
