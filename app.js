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

const firebase = require ('firebase/app');
// firebase = require("firebase-admin");
require('firebase/database');
const firebaseConfig ={
  apiKey: "AIzaSyDzmT8_Y9oiVV95zsL2obGgVnnC3SZqPhA",
    authDomain: "real-time-db-91f23.firebaseapp.com",
    databaseURL: "https://real-time-db-91f23.firebaseio.com",
    projectId: "real-time-db-91f23",
    storageBucket: "real-time-db-91f23.appspot.com",
    messagingSenderId: "457456860728",
    appId: "1:457456860728:web:43a0203c8486d53c4cf0cd",
    measurementId: "G-QC515SPK56"
}
firebase.initializeApp(firebaseConfig);


app.post('/qr/', (req, res) => {
  let respuesta;
  let arrayrespuesta = [];
  //configQr(req);
  //respuesta="Esto es lo del QR ";
  const { uid} = req.body;
   firebase.database().ref('users/'+ uid + '/posts/').once('value');

   if(snapshot.exists()){
     arrayrespuesta =[];
     respuesta=snapshot.val();
     for (const post in respuesta){
       if(respuesta.hasOwnProperty(post)){
         const elemento =respuesta[post];
         arrayrespuesta-push({
           name :elemento.name,
           category: elemento.category,
           location: elemento.location,
           price: elemento.price
         });
       }
     }
     res.send({resp:arrayrespuesta});
   }else{
     res.send('1');
   }
  //var database = 'jesus';
 
  
})

app.listen(3000, () => {
console.log('Servidor corriendo');
});