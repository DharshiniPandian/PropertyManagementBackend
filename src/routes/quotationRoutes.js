const express =  require('express')
const router = express.Router()
const quotationController = require('../controllers/quotation_controller')

router.post('/', quotationController.store_quotation)

module.exports = router