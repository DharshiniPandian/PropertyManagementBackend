'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_component_based_on', [
      {
        component_name: 'Amount',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        component_name: 'UOM',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        component_name: '%',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        component_name: 'Rental Value',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        component_name: 'Monthly',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        component_name: 'Total',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_component_based_on', null, {});
  }
};
