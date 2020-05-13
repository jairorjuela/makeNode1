const express = require('express');
const app = express();

app.get('/makers/:nombre', (req, res) => {
  let nombreInicial = req.params.nombre || "desconocido"
  let nombre = nombreInicial.charAt(0).toUpperCase() + nombreInicial.slice(1).toLowerCase()

  res.send(`<h1>Hola ${nombre}!</h1>`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
