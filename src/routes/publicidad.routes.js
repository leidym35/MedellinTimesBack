const express = require('express');
const router = express.Router()
const publicidadController= require('./controllers/publicidad.controller')
//creacion de rutas
router.get('/publicidad',publicidadController.get);

router.get('/publicidadId/:id',publicidadController.getId)

router.post('/publicidadSave',publicidadController.save)

router.post('/publicidadUpdate/:id',publicidadController.update)

router.get('/publicidadDelete/:id',publicidadController.delete)
module.exports = router;