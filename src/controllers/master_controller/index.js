const {Unit, MasterAmenity, UnitAddOns, MasterUtility} = require('../../../models')

const get_units = async (req, res) => {
    try{
        const units = await Unit.findAll({
            attributes: ['id', 'unit_name','unit_description','price','path_of_thumbnail','bedroom_count',
                'bath_count', 'house_type', 'area', 'address', 'unit_no'
            ], 
            where: { is_active: true }
        })
        res.status(200).json(units);
    }
    catch (error) {
        console.error("Error fetching units from table: ", error)
        res.status(500).json({ message : "Internal server Error", error: error.message });
    }
}

const get_ammenities = async (req, res) => {
    const {id} = req.params
    try{
        const unit_addons = await UnitAddOns.findAll({
          
            include: [
              { model: MasterAmenity,
                as: 'amenity',
                attributes: ['id', 'amenity_name']
              },
            ],
            where: { is_active: true, unit_id: id, utility_id: null },
            attributes: ['price']
        })
        res.status(200).json(unit_addons);
    }
    catch (error) {
        console.error("Error fetching units from table: ", error)
        res.status(500).json({ message : "Internal server Error", error: error.message });
    }
}

const get_utilities = async (req, res) => {
    const {id} = req.params
    try{
        const unit_addons = await UnitAddOns.findAll({
          
            include: [
              { model: MasterUtility,
                as: 'utility',
                attributes: ['id', 'utility_name']
              },
            ],
            where: { is_active: true, unit_id: id, amenity_id: null },
            attributes: [ 'price']
        })
        res.status(200).json(unit_addons);
    }
    catch (error) {
        console.error("Error fetching units from table: ", error)
        res.status(500).json({ message : "Internal server Error", error: error.message });
    }
}

module.exports = {
    get_units,
    get_ammenities,
    get_utilities
  };