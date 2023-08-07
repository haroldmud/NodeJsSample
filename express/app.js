const express = require('express');// returns a function
const path = require('path')

const app = express( )

app.listen(3000, ()=>{
  console.log('the request has been made')
});

app.get('/', (req, res)=>{
  const homePath = path.join(__dirname, '../view/index.html')
  res.sendFile(homePath);
})

app.get('/about', (req, res)=>{
  const aboutPath = path.join(__dirname, '../view/about.html')
  res.sendFile(aboutPath);
})
// the "__dirname" refers to the whole system directory

app.get ('/about-us', (req, res) => {
  res.redirect('/about')
});

app.use((req, res)=> {
  const errorPath = path.join('../view/404.html', __dirname)
  res.status(404).sendFile(errorPath)
})
