const {MasterPricingRevenueMapping, MasterRevenueType, MasterPricingComponentMapping, MasterComponentBasedOn} = require('../../../models')

// to get revenue types based on pricing component
const get_pricing_components_revenue = async (req, res) => {
    const {id} = req.params
    try{
        const revenue_types = await MasterPricingRevenueMapping.findAll({
          
            include: [
              { model: MasterRevenueType,
                as: 'revenue',
                attributes: ['id', 'revenue_type_name']
              },
            ],
            where: { is_active: true, pricing_id: id },
            attributes: []
        })
        res.status(200).json(revenue_types);
    }
    catch (error) {
        console.error("Error fetching revenue types under a component from table: ", error)
        res.status(500).json({ message : "Internal server Error", error: error.message });
    }
}

// to get component based on pricing component
const get_pricing_components_based_on = async (req, res) => {
  const {id} = req.params
  try{
      const components_based_on = await MasterPricingComponentMapping.findAll({
        
          include: [
            { model: MasterComponentBasedOn,
              as: 'component',
              attributes: ['id', 'component_name']
            },
          ],
          where: { is_active: true, pricing_id: id },
          attributes: []
      })
      res.status(200).json(components_based_on);
  }
  catch (error) {
      console.error("Error fetching component based on under a component from table: ", error)
      res.status(500).json({ message : "Internal server Error", error: error.message });
  }
}

module.exports = {
    get_pricing_components_revenue,
    get_pricing_components_based_on
  };