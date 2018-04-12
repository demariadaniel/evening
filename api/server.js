const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config()

let loggedIn = false;
const redirect_uri = 'http://localhost:3000/spotify';
const token_uri = 'https://accounts.spotify.com/api/token';

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

app.post('/auth', (req, res)=>{
  const auth = Buffer
                .from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`)
                .toString('base64');
  axios.post(token_uri, {},
    {
      params:{
      'grant_type': 'authorization_code',
      'code': req.body.code,
      'redirect_uri': redirect_uri,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    }, headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type':'application/x-www-form-urlencoded'
      }
    })
    .then(res=>{
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
})