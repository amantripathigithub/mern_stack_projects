const dotenv = require('dotenv');

const mongoose = require('mongoose');


const express = require('express');

const app = express();

dotenv.config({path: './config.env'});


const PORT = process.env.PORT;

require('./db/connection');






// middleware


const middleware = (req,res, next ) =>{
    console.log('inside middleware kkk');
    next();
}



app.get('/', (req,res) => {
    res.send('heeeeeeeeeeeolo');
});

app.get('/about',middleware, (req,res) => {
    res.send('about page');
});


app.get('/contact', (req,res) => {
    res.send('contact page');
});

app.get('/signup',(req,res) =>{
    res.send(' page');
})



app.listen(PORT, () => {
    console.log('server is running at port '+ PORT);
})