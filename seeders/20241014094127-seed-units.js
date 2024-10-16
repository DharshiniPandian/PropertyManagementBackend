'use strict';
const { v4: uuidv4 } = require('uuid'); 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('unit_details', [
      {
        id: uuidv4(),  
        unit_name: 'Jumeriah Estate',
        unit_description: 'A spacious villa with 4 bedrooms and a beautiful sunset view.',
        price: 350000.00,
        path_of_thumbnail: '/images/units/sunset_villa.jpg',
        bedroom_count: 2,
        bath_count: 2,
        house_type: 2,  
        area: 2000,
        address: 'Rubix Apartment, K Tower, Floor 1',
        unit_no: 1234,
        is_active: true,
        created_by: 1, 
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),  
        unit_name: 'Ocean Breeze Apartment',
        unit_description: 'Modern 2-bedroom apartment with a sea view.',
        price: 150000.00,
        path_of_thumbnail: '/images/units/ocean_breeze.jpg',
        bedroom_count: 2,
        bath_count: 2,
        house_type: 2,  
        area: 1200,
        address: '456 Seaview Road, Bay Town',
        unit_no: 202,
        is_active: true,
        created_by: 1, 
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(), 
        unit_name: 'Mountain Retreat',
        unit_description: 'Cozy 3-bedroom cabin nestled in the mountains.',
        price: 220000.00,
        path_of_thumbnail: '/images/units/mountain_retreat.jpg',
        bedroom_count: 3,
        bath_count: 2,
        house_type: 1,  
        area: 1800,
        address: '789 Highland Way, Mountainville',
        unit_no: 303,
        is_active: true,
        created_by: 1, 
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(), 
        unit_name: 'Downtown Loft',
        unit_description: 'Stylish loft in the heart of the city with easy access to amenities.',
        price: 400000.00,
        path_of_thumbnail: '/images/units/downtown_loft.jpg',
        bedroom_count: 2,
        bath_count: 2,
        house_type: 2,  
        area: 1300,
        address: '321 City Center Ave, Metropolis',
        unit_no: 404,
        is_active: true,
        created_by: 1, 
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('unit_details', null, {});
  }
};
