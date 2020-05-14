const express = require('express');
const router = express.Router()
const eventosController= require('./controllers/eventos.controller')
//creacion de rutas
router.get('/eventos',eventosController.get);

router.post('/eventosSave',eventosController.save)

router.get('/eventosDelete/:id',eventosController.delete)
module.exports = router