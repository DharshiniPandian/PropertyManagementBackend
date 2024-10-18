const express =  require('express')
const router = express.Router()
const mastercontroller = require('../controllers/master_controller')

router.get('/units', mastercontroller.get_units)


module.exports = router