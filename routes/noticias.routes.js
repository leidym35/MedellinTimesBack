const express = require('express');
const router = express.Router()

const mySqlConnection = require('../../dataBase')

router.get('/noticias', (req, res)=> {
    mySqlConnection.query('SELECT*FROM noticias', (err, rows, fields)=>{
        if(!err) {
            res.json(rows)
        }
        else{
            console.log(err)
        }
    });
});

module.exports = router;