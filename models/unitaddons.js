'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UnitAddOnsAddOns extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UnitAddOns.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      UnitAddOns.belongsTo(models.User, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      UnitAddOns.belongsTo(models.User, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 
      UnitAddOns.belongsTo(models.Unit, {
        foreignKey: 'unit_id',
        as: 'unitid',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      UnitAddOns.belongsTo(models.MasterAmenity, {
        foreignKey: 'amenity_id',
        as: 'amenityid',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      UnitAddOns.belongsTo(models.MasterUtility, {
        foreignKey: 'utility_id',
        as: 'utility',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  UnitAddOnsAddOns.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
      allowNull: false,
    }, 
    unit_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'units', 
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
    price:  {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
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
    modelName: 'UnitAddOnsAddOns',
    tableName: 'UnitAddOns_addons',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return UnitAddOnsAddOns;
};