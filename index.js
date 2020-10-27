const express = require('express');
const app = express();
const estudiantes = require('./routes/estudiantes');
const modulos = require('./routes/modulos');
const colegios = require('./routes/colegios');

// Ajustes
app.set('port',3000);

// Middlewares
app.use(express.json());

// Routes//
app.use('/api',estudiantes);
app.use('/api',modulos);
app.use('/api',colegios);

// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});