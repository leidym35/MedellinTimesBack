const express = require('express');
const app=express()
const cors= require('cors')
app.use(cors())
app.set('port',process.env.PORT||3000);
//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))
//modulos
app.use(require('./src/routes/eventos.routes'))
app.use(require('./src/routes/noticias.routes'))
app.use(require('./src/routes/publicidad.routes'))
//Se levanta el servidor 
app.listen(app.get('port'),()=>{
    console.log("port listen ",app.get('port'))
})