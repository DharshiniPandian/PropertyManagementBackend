'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UnitPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UnitPhoto.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'UnitPhotocreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      UnitPhoto.belongsTo(models.User, {
        foreignKey: 'updated_by',
        as: 'UnitPhotoupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      UnitPhoto.belongsTo(models.User, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 
      UnitPhoto.belongsTo(models.Unit, {
        foreignKey: 'unit_id',
        as: 'unit',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 
    }
  }
  UnitPhoto.init({
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
        model: 'unit_details', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
      
    }, 
    photo_path: {
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
    modelName: 'UnitPhoto',
    tableName: 'UnitPhoto_photos',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return UnitPhoto;
};