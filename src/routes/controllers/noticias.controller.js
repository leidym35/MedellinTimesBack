const mySqlConnection = require('../../../dataBase')
const controller = {}

controller.get = (req, res) => {
    mySqlConnection.query('SELECT*FROM noticias', (err, rows) => {
        if (!err) {
            res.json(rows)
        }
        else {
            console.log(err)
        }
    });
}

controller.save = (req, res) => {
    const data = req.body;
    mySqlConnection.query('INSERT INTO noticias set ?', [data], (err, rows) => {
        if (!err) {
            res.json("insertado")
        }
        else {
            console.log(err)
        }
    });
}

controller.update = (req, res) => {
    mySqlConnection.query('UPDATE noticias SET titulo=?,body=?,imagen=? WHERE id=?', [req.body.titulo,req.body.descripcion,req.body.imagen,req.params.id], (err, rows) => {
        if (!err) {
            res.json("Actualizado")
        }
        else {
            console.log(err)
        }
    })
};



controller.delete = (req, res) => {

    console.log(req.params)
     mySqlConnection.query('DELETE FROM  noticias WHERE id=?',[req.params.id] , (err, rows) => {
        if (!err) {
            res.json("Eliminado")
        }
        else {
            console.log("error",err)
        }
    }) 
};
module.exports = controller;