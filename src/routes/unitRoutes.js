const express =  require('express')
const router = express.Router()
const unitcontroller = require('../controllers/unit_controller')

router.get('/amenity/:id', unitcontroller.get_ammenities)
router.get('/utility/:id', unitcontroller.get_utilities)

module.exports = router