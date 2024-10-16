'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_revenue_types', [
      {
        revenue_type_name: 'Lease',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        revenue_type_name: 'Sales',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        revenue_type_name: 'Manage',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        revenue_type_name: 'Stay',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_revenue_types', null, {});
  }
};
