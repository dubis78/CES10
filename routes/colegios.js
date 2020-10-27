const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/colegios', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM instituciones_educativas', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.post('/nuevo-colegio',(req,res)=>{

const {modulo,mod} = req.body;
// let modul = [modulo,mod];

// let nuevoModulo = `INSERT INTO actores(modulo,mod)
//                   VALUES(?,?)`;
mysqlConnection.query(`INSERT INTO instituciones_educativas(instituciones_educativas.modulo,instituciones_educativas.mod) VALUES('${modulo}','${mod}')`, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Colegio agregado`, })
  });
});  

router.put('/colegio/:id', (req, res) => {
  const {modulo,mod} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE instituciones_educativas SET instituciones_educativas.modulo = '${modulo}',instituciones_educativas.mod = '${mod}' WHERE id = '${id}'`,(err, rows, fields) => {
    if(!err) {
      res.json({status: 'Colegio actualizado'});
    } else {
      console.log(err);
    }
  });
});

router.delete('/colegio/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM instituciones_educativas WHERE id = ?',
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Colegio eliminado!'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;