const express = require('express');
const app = express();
const port = 3030;
const path = require('path');
app.use(express.static('public'));

app.listen (port , () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`)
});

app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname , './views/index.html'))
});

app.get('/babbage' , (req,res) => {
    res.sendFile(path.join(__dirname , './views/babbage.html'))
});

app.get('/banners-lee' , (req,res) => {
    res.sendFile(path.join(__dirname , './views/banners-lee.html'))
});

app.get('/clake' , (req,res) => {
    res.sendFile(path.join(__dirname , './views/clake.html'))
});

app.get('/hamilton' , (req,res) => {
    res.sendFile(path.join(__dirname , './views/hamilton.html'))
});

app.get('/hopper' , (req,res) => {
    res.sendFile(path.join(__dirname , './views/hopper.html'))
});

app.get('/lovelace' , (req,res) => {
    res.sendFile(path.join(__dirname , './views/lovelace.html'))
});

app.get('/turing' , (req,res) => {
    res.sendFile(path.join(__dirname , './views/turing.html'))
});

