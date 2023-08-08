const express = require('express');
const http = require('http')
const app = express()

// registering the view engine
app.set('view engine', 'ejs');

app.listen('8080', ()=> {
  console.log('the request has been sent')
});

app.get('/', (req, res)=>{
  const blogs = [
  {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'}, 
  {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},  
  ];
  res.render('index', {title: 'Home page', blogs })
});

app.get('/about', (req, res)=>{
  res.render('about', {title: 'About page'})
});

app.get('/blogs/create', (req, res)=>{
  res.render('create', {title: 'Create Blog page'})
});

app.use((res,req)=>{
  res.render('404', {title: 'Error  page'})
})

http.createServer(()=>{
  console.log('the response has been provided')
})
