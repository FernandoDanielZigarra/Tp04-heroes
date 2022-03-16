const express = require('express');
const app = express();
const port = 3030;
const path = require('path');
app.use(express.static('public'));

app.get('/' , (req,res) => {
    return res.sendFile(path.resolve(__dirname , 'views' , 'index.html'))
});

app.get('/babbage' , (req,res) => {
    return res.sendFile(path.resolve(__dirname , 'views' , 'babbage.html'))
});

app.get('/berners-lee' , (req,res) => {
    return res.sendFile(path.resolve(__dirname , 'views' , 'berners-lee.html'))
});

app.get('/clarke' , (req,res) => {
    return res.sendFile(path.resolve(__dirname , 'views' , 'clarke.html'))
});

app.get('/hamilton' , (req,res) => {
    return res.sendFile(path.resolve(__dirname , 'views' , 'hamilton.html'))
});

app.get('/hopper' , (req,res) => {
    return res.sendFile(path.resolve(__dirname , 'views' , 'hopper.html'))
});

app.get('/lovelace' , (req,res) => {
    return res.sendFile(path.resolve(__dirname , 'views' , 'lovelace.html'))
});

app.get('/turing' , (req,res) => {
    return res.sendFile(path.resolve(__dirname , 'views' , 'turing.html'))
});

app.listen (port , () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`)
});