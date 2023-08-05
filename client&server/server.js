const http = require('http');
const fs = require('fs');

const server =  http.createServer((req, res )=>{
  console.log(req);
  
  //step1: define the type of the content we'll send as
  //       a response. this can be a text, an HTML, etc 
  res.setHeader('content-type', 'text/plain')

  //step2: Write the content according to its type
  res.write('Hello, world')

  //step3: we end the response which then sends it to the
  //       browser
  res.end()
});

server.listen(8080, 'localhost', ()=>{
  console.log('waiting for the first listened server request')
})
