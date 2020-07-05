require('./config/config');
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('vistas/bar.blade.php');
});

app.listen(process.env.PORT, ()=>{
    console.log("Escuchando en el puerto: ", process.env.PORT);
});