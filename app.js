// this is video course by Web Dev Simplified:
// https://www.youtube.com/watch?v=VShtPwEkDD0&list=PLZlA0Gpn_vH_uZs4vJMIhcinABSTUH2bY

const http = require("http"); // this is a Node.js module that allows to transfer data over the Hyper Text Transfer Protocol (HTTP)
const fs = require("fs"); // this is a Node.js module that allows to work with file system of your computer (will allow access to index.html placed in the same folder)
const port = 3000;

const server = http.createServer(function (req, res) {
  // http method to createServer
  res.writeHead(200, { "Content-type": "text/html" }); // says that a response will be in text/html format
  fs.readFile("index.html", function (error, data) {
    // reads the file placed in the same folder
    if (error) {
      res.writeHead(404);
      res.write("Error: File Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function (error) {
  // the server object listens on port 8080
  if (error) {
    console.log("something went wrong", error);
  } else {
    console.log("Server is listening on port ", port);
  }
});
