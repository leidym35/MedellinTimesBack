const express = require('express');
const router = express.Router()
const publicidadController= require('./controllers/publicidad.controller')

router.get('/publicidad',publicidadController.get);

router.post('/publicidadSave',publicidadController.save)

router.post('/publicidadUpdate/:id',publicidadController.update)

router.get('/publicidadDelete/:id',publicidadController.delete)
module.exports = router;