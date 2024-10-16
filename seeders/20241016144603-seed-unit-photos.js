'use strict';
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('unit_photos', [
      {
          id: uuidv4(), 
          unit_id: '680d3924-3c8f-4787-92db-1b774c8e0b1a',
          photo_path: '/images/pic1.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: '680d3924-3c8f-4787-92db-1b774c8e0b1a',
          photo_path: '/images/pic2.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: '680d3924-3c8f-4787-92db-1b774c8e0b1a',
          photo_path: '/images/pic3.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: '680d3924-3c8f-4787-92db-1b774c8e0b1a',
          photo_path: '/images/pic4.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: '680d3924-3c8f-4787-92db-1b774c8e0b1a',
          photo_path: '/images/pic5.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: '680d3924-3c8f-4787-92db-1b774c8e0b1a',
          photo_path: '/images/pic6.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: '92c9ddba-83b2-41a2-a435-c2790f2bb4e6',
          photo_path: '/images/pic1.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: '92c9ddba-83b2-41a2-a435-c2790f2bb4e6',
          photo_path: '/images/pic2.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: '92c9ddba-83b2-41a2-a435-c2790f2bb4e6',
          photo_path: '/images/pic3.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: '92c9ddba-83b2-41a2-a435-c2790f2bb4e6',
          photo_path: '/images/pic4.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: '92c9ddba-83b2-41a2-a435-c2790f2bb4e6',
          photo_path: '/images/pic5.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: '92c9ddba-83b2-41a2-a435-c2790f2bb4e6',
          photo_path: '/images/pic6.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: 'bd14df40-248b-4b43-962c-96f735edeb03',
          photo_path: '/images/pic1.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: 'bd14df40-248b-4b43-962c-96f735edeb03',
          photo_path: '/images/pic2.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: 'bd14df40-248b-4b43-962c-96f735edeb03',
          photo_path: '/images/pic3.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: 'bd14df40-248b-4b43-962c-96f735edeb03',
          photo_path: '/images/pic4.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: 'bd14df40-248b-4b43-962c-96f735edeb03',
          photo_path: '/images/pic5.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: 'bd14df40-248b-4b43-962c-96f735edeb03',
          photo_path: '/images/pic6.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: 'fa6c2eb3-5873-440d-a5d5-fba53826d454',
          photo_path: '/images/pic1.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: 'fa6c2eb3-5873-440d-a5d5-fba53826d454',
          photo_path: '/images/pic2.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: 'fa6c2eb3-5873-440d-a5d5-fba53826d454',
          photo_path: '/images/pic3.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: 'fa6c2eb3-5873-440d-a5d5-fba53826d454',
          photo_path: '/images/pic4.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: 'fa6c2eb3-5873-440d-a5d5-fba53826d454',
          photo_path: '/images/pic5.png',
          is_active: true,
          created_by: 1
      },
      {
          id: uuidv4(), 
          unit_id: 'fa6c2eb3-5873-440d-a5d5-fba53826d454',
          photo_path: '/images/pic6.png',
          is_active: true,
          created_by: 1
      },
  
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('unit_photos', null, {});
  }
};
