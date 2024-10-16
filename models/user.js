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

      User.hasMany(models.MasterComponentBasedOn, {
        foreignKey: 'created_by',
        as: 'master_component_createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterComponentBasedOn, {
        foreignKey: 'updated_by',
        as: 'master_component_updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterComponentBasedOn, {
        foreignKey: 'deleted_by',
        as: 'master_component_deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Unit, {
        foreignKey: 'created_by',
        as: 'unit_createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Unit, {
        foreignKey: 'updated_by',
        as: 'unit_updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Unit, {
        foreignKey: 'deleted_by',
        as: 'unit_deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.UnitAddOns, {
        foreignKey: 'created_by',
        as: 'unitaddon_createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.UnitAddOns, {
        foreignKey: 'updated_by',
        as: 'unitaddon_updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.UnitAddOns, {
        foreignKey: 'deleted_by',
        as: 'unitaddon_deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.UnitPhoto, {
        foreignKey: 'created_by',
        as: 'unitphoto_createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.UnitPhoto, {
        foreignKey: 'updated_by',
        as: 'unitphoto_updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.UnitPhoto, {
        foreignKey: 'deleted_by',
        as: 'unitphoto_deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Quotation, {
        foreignKey: 'created_by',
        as: 'quotation_createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Quotation, {
        foreignKey: 'updated_by',
        as: 'quotation_updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Quotation, {
        foreignKey: 'deleted_by',
        as: 'quotation_deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.QuotedUnit, {
        foreignKey: 'created_by',
        as: 'quotedunit_createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.QuotedUnit, {
        foreignKey: 'updated_by',
        as: 'quotedunit_updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.QuotedUnit, {
        foreignKey: 'deleted_by',
        as: 'quotedunit_deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.QuotedUnitAddOn, {
        foreignKey: 'created_by',
        as: 'quoted_unitaddon_createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.QuotedUnitAddOn, {
        foreignKey: 'updated_by',
        as: 'quoted_unitaddon_updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.QuotedUnitAddOn, {
        foreignKey: 'deleted_by',
        as: 'quoted_unitaddon_deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.QuotedUnitComponent, {
        foreignKey: 'created_by',
        as: 'quoted_unitcomponent_createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.QuotedUnitComponent, {
        foreignKey: 'updated_by',
        as: 'quoted_unitcomponent_updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.QuotedUnitComponent, {
        foreignKey: 'deleted_by',
        as: 'quoted_unitcomponent_deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterPricingRevenueMapping, {
        foreignKey: 'created_by',
        as: 'pricing_revenue_createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterPricingRevenueMapping, {
        foreignKey: 'updated_by',
        as: 'pricing_revenue_updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterPricingRevenueMapping, {
        foreignKey: 'deleted_by',
        as: 'pricing_revenue_deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterPricingComponentMapping, {
        foreignKey: 'created_by',
        as: 'pricing_component_createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterPricingComponentMapping, {
        foreignKey: 'updated_by',
        as: 'pricing_component_updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.MasterPricingComponentMapping, {
        foreignKey: 'deleted_by',
        as: 'pricing_component_deletedby',
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