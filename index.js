const express = require('express');
const app=express()

app.set('port',process.env.PORT||3000);

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(require('./src/routes/eventos.routes'))
app.use(require('./src/routes/noticias.routes'))
app.use(require('./src/routes/publicidad.routes'))
 
app.listen(app.get('port'),()=>{
    console.log("port listen ",app.get('port'))
})