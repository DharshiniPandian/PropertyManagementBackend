'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuotedUnitAddOn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      QuotedUnitAddOn.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      QuotedUnitAddOn.belongsTo(models.User, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      QuotedUnitAddOn.belongsTo(models.User, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 

      QuotedUnitAddOn.belongsTo(models.QuotedUnit, {
        foreignKey: 'quoted_unit_id',
        as: 'quoted_unit',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      QuotedUnitAddOn.belongsTo(models.MasterAmenity, {
        foreignKey: 'amenity_id',
        as: 'amenity',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      QuotedUnitAddOn.belongsTo(models.MasterUtility, {
        foreignKey: 'utility_id',
        as: 'utility',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  QuotedUnitAddOn.init({
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
    amenity_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'master_amenities', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
      
    }, 
    utility_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'master_utilities', 
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
    discount_VALUE: {
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
    modelName: 'QuotedUnitAddOn',
    tableName: 'quoted_unit_addons',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return QuotedUnitAddOn;
};