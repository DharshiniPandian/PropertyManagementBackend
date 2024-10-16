'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_amenities', [
      {
        amenity_name: 'Swimming Pool',
        is_active: true,
        created_by: 1, 
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amenity_name: 'Gym',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amenity_name: 'Wi-Fi',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amenity_name: 'Parking',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amenity_name: '24/7 Security',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amenity_name: 'Spa',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amenity_name: 'Conference Room',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amenity_name: 'Restaurant',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amenity_name: 'Laundry Service',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amenity_name: 'Playground',
        is_active: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_amenities', null, {});
  }
};
