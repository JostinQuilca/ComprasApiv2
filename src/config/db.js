const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    server: process.env.DB_HOST, // Usa 'server' en lugar de 'host'
    port: process.env.DB_PORT,
    dialect: 'mssql',
    dialectModule: require('tedious'),
    dialectOptions: {
      options: {
        encrypt: true, // Requerido para Azure SQL
        trustServerCertificate: true // Para pruebas, opcional
      }
    }
  }
);

module.exports = sequelize;