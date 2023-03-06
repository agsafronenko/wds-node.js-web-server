const http = require("http");
const fs = require("fs");

const port = 3005;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", (error, data) => {
    res.write(data);
    res.end();
  });
});

server.listen(port, () => {
  console.log("port is ready on ", port);
});
