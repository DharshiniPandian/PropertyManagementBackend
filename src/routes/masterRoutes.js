const express =  require('express')
const router = express.Router()
const mastercontroller = require('../controllers/master_controller')

router.get('/units', mastercontroller.get_units)
router.get('/unit/amenity/:id', mastercontroller.get_ammenities)
router.get('/unit/utility/:id', mastercontroller.get_utilities)

module.exports = router