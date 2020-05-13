const express = require('express');
const router = express.Router()
const noticiasController= require('./controllers/noticias.controller')
//creacion de rutas
router.get('/noticias',noticiasController.get);

router.post('/noticiasSave',noticiasController.save)

router.post('/noticiasUpdate/:id',noticiasController.update)

router.get('/noticiasDelete/:id',noticiasController.delete)
module.exports = router;