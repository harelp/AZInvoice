const express = require('express');
const tripController = require('../controllers/tripController');
const router = express.Router();



router
.route('/admin/:id') // -> protected route and restricted 
.patch(tripController.updateTrip)
.delete(tripController.deleteTrip);
router.get('/allTrips', tripController.allTrips) // -> protected route and restricted 

router.post('/createTrip', tripController.createTrip);
router.get('/getTrip', tripController.getTrip)
//router.patch('/updateTrip', tripController.updateMe); // -> udpates 1 trip at a time
//router.delete('/deleteTrip', tripController.deleteMe) // -> deletes 1 trip at a time


module.exports = router;