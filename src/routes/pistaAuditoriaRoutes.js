const express = require('express');
const router = express.Router();
const auditoriaController = require('../controllers/pistaAuditoriaController');

router.get('/', auditoriaController.getAll);
router.get('/:id', auditoriaController.getById);
router.post('/', auditoriaController.create);
router.delete('/:id', auditoriaController.delete);

module.exports = router;