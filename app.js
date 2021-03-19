const express = require('express');
const bodyParser = require('body-parser');

const app = express();



//middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//CORS

//Rutas
app.get('/',(req,res)=>{
    res.status(200).send('Hola mundo');
});
const data = {
    message: 'datos',
    payload: {
        temperatura : '20',
        presion: '1'
    }
}



app.get('/data',(req,res)=>{
    res.status(200).send(data);
});

module.exports = app;