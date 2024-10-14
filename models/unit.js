'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Unit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Unit.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'unitcreatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      Unit.belongsTo(models.User, {
        foreignKey: 'updated_by',
        as: 'unitupdatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      Unit.belongsTo(models.User, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 

      Unit.hasMany(models.UnitAddOns, {
        foreignKey: 'unit_id',
        as: 'unitid',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 

      Unit.hasMany(models.UnitPhoto, {
        foreignKey: 'unit_id',
        as: 'unit',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 

      Unit.hasMany(models.QuotedUnit, {
        foreignKey: 'unit_id',
        as: 'quotedunitid',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 
    }
  }
  Unit.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
      allowNull: false,
    }, 
    unit_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    unit_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    price:  {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    path_of_thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    bedroom_count: {
      type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
        }
    }, 
    bath_count: {
      type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
        }
    }, 
    house_type: {
      type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
        }
    }, 
    area: {
      type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
        }
    }, 
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    unit_no: {
      type: DataTypes.INTEGER,
        allowNull: false,
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
    modelName: 'Unit',
    tableName: 'unit_details',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return Unit;
};