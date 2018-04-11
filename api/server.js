const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config()

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
  // axios.get(`https://accounts.spotify.com/authorize/?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000%2Fspotify`)
  //   .then(response =>{
  //     console.log('promise')
      res.send(process.env.CLIENT_ID)
    // })
})