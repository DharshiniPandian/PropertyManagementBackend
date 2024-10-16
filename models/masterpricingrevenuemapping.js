'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterPricingRevenueMapping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MasterPricingRevenueMapping.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterPricingRevenueMapping.belongsTo(models.User, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterPricingRevenueMapping.belongsTo(models.User, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 

      MasterPricingRevenueMapping.belongsTo(models.MasterPricingComponent, {
        foreignKey: 'pricing_id',
        as: 'pricing',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 

      MasterPricingRevenueMapping.belongsTo(models.MasterRevenueType, {
        foreignKey: 'revenue_id',
        as: 'revenue',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 
    }
  }
  MasterPricingRevenueMapping.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
     },
    pricing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'master_pricing_components', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' 
    }, 
    revenue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'master_revenue_types', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' 
    }, 
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      validate: {
        isIn: [[true, false]],
      }
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
      
    }, 
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
      
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
  }, {
    sequelize,
    modelName: 'MasterPricingRevenueMapping',
    tableName: 'master_pricing_revenue_mappings',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return MasterPricingRevenueMapping;
};