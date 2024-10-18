const {Unit, MasterAmenity, UnitAddOns, MasterUtility} = require('../../../models')

// to get all the units
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

module.exports = {
    get_units,
  };