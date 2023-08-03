const http =require('http');

const server = http.createServer((req, res)=>{
   console.log('the request is already made')
});

server.listen(3000, 'localhost',()=>{
  console.log('Waiting for any upcoming request')
})
