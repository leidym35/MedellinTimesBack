const mySqlConnection = require('../../../dataBase')
const controller = {}

controller.get = (req, res) => {
    mySqlConnection.query('SELECT*FROM eventos', (err, rows) => {
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
    mySqlConnection.query('INSERT INTO eventos set ?', [data], (err, rows) => {
        if (!err) {
            res.json("insertado")
        }
        else {
            console.log(err)
        }
    });
}

controller.update = (req, res) => {
    mySqlConnection.query('UPDATE eventos SET titulo=?,descripcion=? WHERE id=?', [req.body.titulo,req.body.descripcion,req.params.id], (err, rows) => {
        if (!err) {
            res.json("Actualizado")

        }
        else {
            console.log(err)
        }
    })
};



controller.delete = (req, res) => {
     mySqlConnection.query('DELETE FROM  eventos WHERE id=?',[req.params.id] , (err, rows) => {
        if (!err) {
            res.json("Eliminado")
        }
        else {
            res.json("error")
        }
    }) 
};
module.exports = controller;