const { Quotation, QuotedUnit, QuotedUnitAddon, QuotedUnitComponent, sequelize } = require('../../../models');

// to store a quotation
const store_quotation = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        console.log(require('../../../models'));

        console.log(QuotedUnit, Quotation, QuotedUnitAddon, QuotedUnitComponent)
        const { created_by, quoted_units } = req.body;

        const quotation = await Quotation.create({
            created_by
        }, { transaction: t });

        console.log(quotation)

        for (const unit of quoted_units) {
            const quotedUnit = await QuotedUnit.create({
                quotation_id: quotation.id,
                unit_id: unit.unit_id,
                created_by
            }, { transaction: t });

            console.log(quotedUnit)

            console.log(QuotedUnitAddon)

            if (unit.addons) {
                for (const addon of unit.addons) {
                    await QuotedUnitAddon.create({
                        quoted_unit_id: quotedUnit.id,
                        amenity_id: addon.amenity_id,
                        utility_id: addon.utility_id,
                        discount_type: addon.discount_type,
                        discount_value: addon.discount_value,
                        created_by: quotedUnit.created_by
                    }, { transaction: t });
                }
            }

            if (unit.components) {
                for (const component of unit.components) {
                    await QuotedUnitComponent.create({
                        quoted_unit_id: quotedUnit.id,
                        pricing_id: component.pricing_id,
                        revenue_id: component.revenue_id,
                        component_id: component.component_id,
                        discount_type: component.discount_type,
                        discount_value: component.discount_value,
                        item_unit_price: component.item_unit_price,
                        quantity: component.quantity,
                        chargeable: component.chargeable,
                        created_by
                    }, { transaction: t });
                }
            }
        }

        await t.commit();
        res.status(201).json({ message: 'Quotation and related data created successfully.', quotationId: quotation.id });

    } catch (error) {
        await t.rollback(); 
        console.error('Error storing data:', error);
        res.status(500).json({ message: 'Error storing data', error });
    }
};

module.exports = {
    store_quotation
};
