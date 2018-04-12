const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config()

let loggedIn = false;

app.use(bodyParser());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
app.listen(8080, ()=>{
    console.log('listening on port 8080')
})

app.get('/auth', (req, res)=>{
  console.log(loggedIn)
  if (loggedIn) {
    res.send({loggedIn: true})
  } else {
    res.send({loggedIn: false, id: process.env.CLIENT_ID})
    loggedIn = true;
  }
})