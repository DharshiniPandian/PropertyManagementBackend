'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuotedUnitComponent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      QuotedUnitComponent.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      QuotedUnitComponent.belongsTo(models.User, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      QuotedUnitComponent.belongsTo(models.User, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 

      QuotedUnitComponent.belongsTo(models.MasterPricingComponent, {
        foreignKey: 'pricing_id',
        as: 'pricing',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 

      QuotedUnitComponent.belongsTo(models.MasterRevenueType, {
        foreignKey: 'revenue_id',
        as: 'revenue',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 

      QuotedUnitComponent.belongsTo(models.MasterComponentBasedOn, {
        foreignKey: 'component_id',
        as: 'component',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 
    }
  }
  QuotedUnitComponent.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
      allowNull: false,
    }, 
    quoted_unit_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'quoted_units', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' 
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
    component_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'master_component_based_on', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' 
    }, 
    discount_type: {
      type: DataTypes.ENUM('Percentage', 'Value'),
      allowNull: true,
      defaultValue: 'Percentage',
      validate: {
        isIn: [['Percentage', 'Value']], 
      }
    },   
    discount_value: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true,
      }
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
    modelName: 'QuotedUnitComponent',
    tableName: 'quoted_unit_components',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return QuotedUnitComponent;
};