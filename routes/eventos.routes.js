const express = require('express');
const router = express.Router()

const mySqlConnection = require('../../dataBase')

router.get('/eventos', (req, res)=> {
    mySqlConnection.query('SELECT*FROM eventos', (err, rows, fields)=>{
        if(!err) {
            res.json(rows)
        }
        else{
            console.log(err)
        }
    });
});

router.post('/eventos', (req, res)=> {
    mySqlConnection.query('SELECT*FROM eventos', (err, rows, fields)=>{
        if(!err) {
            res.json(rows)
        }
        else{
            console.log(err)
        }
    });
});
module.exports = router;