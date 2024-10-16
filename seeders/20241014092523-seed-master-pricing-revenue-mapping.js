'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_pricing_revenue_mappings', [
      {
        pricing_id: 1,
        revenue_id: 1,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 1,
        revenue_id: 2,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 1,
        revenue_id: 3,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 2,
        revenue_id: 1,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 2,
        revenue_id: 2,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 2,
        revenue_id: 3,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 2,
        revenue_id: 4,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 3,
        revenue_id: 1,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 3,
        revenue_id: 2,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 3,
        revenue_id: 3,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 3,
        revenue_id: 4,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 4,
        revenue_id: 1,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 4,
        revenue_id: 2,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 4,
        revenue_id: 3,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 4,
        revenue_id: 4,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 5,
        revenue_id: 1,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 5,
        revenue_id: 2,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 5,
        revenue_id: 3,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 5,
        revenue_id: 4,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 6,
        revenue_id: 1,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 6,
        revenue_id: 2,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 6,
        revenue_id: 3,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        pricing_id: 6,
        revenue_id: 4,
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_pricing_revenue_mappings', null, {});
  }
};
