'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterAmenity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MasterAmenity.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterAmenity.belongsTo(models.User, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterAmenity.belongsTo(models.User, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 
      MasterAmenity.hasMany(models.UnitAddOns, {
        foreignKey: 'amenity_id',
        as: 'amenity',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 

      MasterAmenity.hasMany(models.QuotedUnitAddon, {
        foreignKey: 'amenity_id',
        as: 'quoted_unit_amenity',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 
    }
  }
  MasterAmenity.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
     },
     amenity_name: {
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
     created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: 'MasterAmenity',
    tableName: 'master_amenities',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return MasterAmenity;
};