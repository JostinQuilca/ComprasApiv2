const express = require('express');
const morgan = require('morgan');

// Crear instancia de Express
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Rutas de la API
app.use('/api/proveedores', require('./routes/proveedorRoutes'));
app.use('/api/facturas', require('./routes/facturaCompraRoutes'));
app.use('/api/detalles-factura', require('./routes/facturaDetalleRoutes'));
app.use('/api/pagos', require('./routes/pagoProveedorRoutes'));
app.use('/api/saldos', require('./routes/saldoProveedorRoutes'));
app.use('/api/auditoria', require('./routes/pistaAuditoriaRoutes'));
app.use('/api/configuracion', require('./routes/configuracionRoutes'));
app.use('/api/tokens', require('./routes/tokensRoutes'));

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'API de Compras corriendo 🚀' });
});

module.exports = app;