const express = require('express');
const router = express.Router()
const publicidadController= require('./controllers/publicidad.controller')
//creacion de rutas
router.get('/publicidad',publicidadController.get);

router.post('/publicidadSave',publicidadController.save)

router.get('/publicidadDelete/:id',publicidadController.delete)
module.exports = router;