const http = require("http");
const file = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/HTML");

  file.readFile("../view/index.html", (err, data) => {
    if (err) {
      res.write("<p>AN ERROR OCCUR</p>");
      res.end()
    }
    res.write(data);
    res.end();
  });
  console.log("Response sent successfully");
});

server.listen(8080, "localhost", () => {
  console.log("waiting for the first listened server request");
});
