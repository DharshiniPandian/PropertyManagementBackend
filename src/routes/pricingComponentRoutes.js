const express =  require('express')
const router = express.Router()
const pricingController = require('../controllers/pricing_component_controller')

router.get('/revenue/:id', pricingController.get_pricing_components_revenue)
router.get('/basedon/:id', pricingController.get_pricing_components_based_on)

module.exports = router