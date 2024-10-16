'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_utilities', [
      {
        utility_name: 'Electricity',
        is_active: true,
        created_by: 1,  
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        utility_name: 'Water Supply',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        utility_name: 'Internet',
        is_active: true,
        created_by: 1,  
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        utility_name: 'Gas',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        utility_name: 'Waste Disposal',
        is_active: true,
        created_by: 1,  
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        utility_name: 'Heating',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        utility_name: 'Air Conditioning',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        utility_name: 'Security Monitoring',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        utility_name: 'Fire Protection',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        utility_name: 'Cable TV',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_utilities', null, {});
  }
};
