const express = require('express');
const http = require('http')
const app = express()

// registering the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render('index')
})
app.listen('8080', ()=> {
  console.log('the request has been sent')
});

http.createServer(()=>{
  console.log('the response has been provided')
})
