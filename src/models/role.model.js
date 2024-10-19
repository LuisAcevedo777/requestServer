const { DataTypes } = require("sequelize");
const db = require("../utils/db");


const Role = db.define(
  "roles",
  {
    roleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: "role_id",
    },
    name: {
      type: DataTypes.STRING(12),
      allowNull: false,
  
  }
},
  {timestamps: false }
    
);

module.exports = Role;

