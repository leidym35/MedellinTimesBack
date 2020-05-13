const express = require('express');
const router = express.Router()
const eventosController= require('./controllers/eventos.controller')

router.get('/eventos',eventosController.get);

router.post('/eventosSave',eventosController.save)

router.post('/eventosUpdate/:id',eventosController.update)

router.get('/eventosDelete/:id',eventosController.delete)
module.exports = router