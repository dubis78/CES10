const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/modulos', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM modulos', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.post('/nuevo-modulo',(req,res)=>{

const {modulo,mod} = req.body;
// let modul = [modulo,mod];

// let nuevoModulo = `INSERT INTO actores(modulo,mod)
//                   VALUES(?,?)`;
mysqlConnection.query(`INSERT INTO modulos(modulos.modulo,modulos.mod) VALUES('${modulo}','${mod}')`, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Modulo agregado`, })
  });
});  

router.put('/modulo/:id', (req, res) => {
  const {modulo,mod} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE modulos SET modulos.modulo = '${modulo}',modulos.mod = '${mod}' WHERE id = '${id}'`,(err, rows, fields) => {
    if(!err) {
      res.json({status: 'Modulo actualizado'});
    } else {
      console.log(err);
    }
  });
});

router.delete('/modulo/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM modulos WHERE id = ?',
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Modulo eliminado!'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;