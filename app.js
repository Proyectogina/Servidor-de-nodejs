const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const configMensaje = require('./configMensaje');
app.use(bodyParser.json());
app.use(cors())
app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
})
app.get('/promociones', (req, res) => {
  let respuesta;
  respuesta="No hay promociones por lo pronto :/ ";
  res.send({resp:respuesta});
})

app.get('/hotelb', (req, res) => {
  let respuesta;
  respuesta="Cabañas Mazamitla";
    res.send({resp:respuesta});

})

app.listen(3000, () => {
console.log('Servidor corriendo')
});