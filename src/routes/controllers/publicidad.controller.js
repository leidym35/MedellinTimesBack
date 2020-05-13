const mySqlConnection = require('../../../dataBase')
const controller = {}

controller.get = (req, res) => {
    mySqlConnection.query('SELECT*FROM publicidad', (err, rows) => {
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
    mySqlConnection.query('INSERT INTO publicidad set ?', [data], (err, rows) => {
        if (!err) {
            res.json("insertado")
        }
        else {
            console.log(err)
        }
    });
}


controller.update = (req, res) => {
    mySqlConnection.query('UPDATE publicidad SET titulo=?,imagen=? WHERE id=?', [req.body.titulo,req.body.imagen,req.params.id], (err, rows) => {
        if (!err) {
            res.json("Actualizado")
        }
        else {
            console.log(err)
        }
    })
};



controller.delete = (req, res) => {
        
     mySqlConnection.query('DELETE FROM  publicidad WHERE id=?',[req.params.id] , (err, rows) => {
        if (!err) {
            res.json("Eliminado")
        }
        else {
            console.log(err)
          
        }
    }) 
};
module.exports = controller;