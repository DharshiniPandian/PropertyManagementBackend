'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_pricing_components', [
      {
        component_name: 'Primary',
        is_active: true,
        created_by: 1,  
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        component_name: 'Secondary',
        is_active: true,
        created_by: 1,  
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        component_name: 'One Time Charges',
        is_active: true,
        created_by: 1,  
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        component_name: 'Refundables',
        is_active: true,
        created_by: 1,  
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        component_name: 'Inventory Item',
        is_active: true,
        created_by: 1,  
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        component_name: 'Parking Slot',
        is_active: true,
        created_by: 1,  
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_pricing_components', null, {});
  }
};
