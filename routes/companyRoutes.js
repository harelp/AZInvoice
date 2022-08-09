const express = require('express');

const companyController = require('../controllers/companyController');
const router = express.Router();


router
.route('/admin/:id') // -> protected route and restricted 
.patch(companyController.updateCompany)
.delete(companyController.deleteCompany);
router.get('/allTrips', companyController.allCompanies) // -> protected route and restricted 

router.post('/createCompany', companyController.createCompany);
router.get('/getCompany', companyController.getCompany)
//router.patch('/updateCompany', tripController.updateMe); // -> udpates 1 trip at a time
//router.delete('/deleteCompany', tripController.deleteMe) // -> deletes 1 trip at a time


module.exports = router;
