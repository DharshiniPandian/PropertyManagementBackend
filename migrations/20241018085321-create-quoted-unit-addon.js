'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('QuotedUnitAddons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quoted_unit_id: {
        type: Sequelize.UUID
      },
      amenity_id: {
        type: Sequelize.INTEGER
      },
      utility_id: {
        type: Sequelize.INTEGER
      },
      discount_value: {
        type: Sequelize.INTEGER
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('QuotedUnitAddons');
  }
};