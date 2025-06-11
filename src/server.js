require('dotenv').config(); // Carga variables de entorno desde .env
const app = require('./app');
const { sequelize } = require('./models');
const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Error al iniciar la aplicación:', err);
  }
})();