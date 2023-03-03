const dotenv = require('dotenv');

const mongoose = require('mongoose');


const express = require('express');
const app = express();

dotenv.config({path: './config.env'})

const DB = process.env.DATABASE;
mongoose.connect(DB).then(()=>{
    console.log("ban gya");
}).catch((err)=>{
    console.log("nhib  hua");
});


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


app.listen(3000, () => {
    console.log('server is running at port 3000');
})