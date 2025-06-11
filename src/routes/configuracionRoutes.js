const express = require('express');
const router = express.Router();
const configuracionController = require('../controllers/ConfiguracionComprasController');

router.get('/', configuracionController.getAll);
router.get('/:id', configuracionController.getById);
router.post('/', configuracionController.create);
router.put('/:id', configuracionController.update);
router.delete('/:id', configuracionController.delete);

module.exports = router;