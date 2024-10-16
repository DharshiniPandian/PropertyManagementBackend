'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Bala Ganesh',
        email: 'john@example.com',
        role: 'Super Admin',
        phone: '1234567890',
        profile_img_path: 'images/admin.jpg',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Tom Cruise',
        email: 'Tomcruise2515@mail.com',
        role: 'Prospect',
        phone: '+91 9090808012',
        profile_img_path: 'images/prospect.jpg',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
