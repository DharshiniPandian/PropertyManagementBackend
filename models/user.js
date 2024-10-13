'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.MasterAmenity, {
        foreignKey: 'created_by',
        as: 'master_amenity_createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterAmenity, {
        foreignKey: 'updated_by',
        as: 'master_amenity_updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterAmenity, {
        foreignKey: 'deleted_by',
        as: 'master_amenity_deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      User.hasMany(models.MasterUtility, {
        foreignKey: 'created_by',
        as: 'master_utility_createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterUtility, {
        foreignKey: 'updated_by',
        as: 'master_utility_updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterUtility, {
        foreignKey: 'deleted_by',
        as: 'master_utility_deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterPricingComponent, {
        foreignKey: 'created_by',
        as: 'master_pricing_conponent_createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterPricingComponent, {
        foreignKey: 'updated_by',
        as: 'master_pricing_conponent_updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterPricingComponent, {
        foreignKey: 'deleted_by',
        as: 'master_pricing_conponent_deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterRevenueType, {
        foreignKey: 'created_by',
        as: 'master_revenue_type_createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterRevenueType, {
        foreignKey: 'updated_by',
        as: 'master_revenue_type_updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterRevenueType, {
        foreignKey: 'deleted_by',
        as: 'master_revenue_type_deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterComponent, {
        foreignKey: 'created_by',
        as: 'master_component_createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterComponent, {
        foreignKey: 'updated_by',
        as: 'master_component_updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterComponent, {
        foreignKey: 'deleted_by',
        as: 'master_component_deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    role: {
      type: DataTypes.ENUM('Super Admin', 'Prospect'),
      allowNull: false,
      defaultValue: 'Prospect',
      validate: {
        isIn: [['Super Admin', 'Prospect']], 
      }
    },    
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      validate: {
        isIn: [[true, false]],
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at',
  });
  return User;
};