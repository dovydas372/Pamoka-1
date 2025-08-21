const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
    case "/index.html":
      path += "index.html";
      break;
    case `/kontaktai`:
      path += "Kontaktai.html";
      break;
    case `/kontaktaijs`:
      path += "kontaktai.js";
      break;
    case "/apie":
      path += "apie.html";
      break;
    case "/siusti-zinute":
      req.on("data", (data) => {
        console.log(data.toString());
        res.end(JSON.stringify(data.toString()));
      });
      break;
    case `/apie-mus`:
      res.statusCode = 301;
      res.setHeader("Location", "/apie");
      res.end();
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Klaida skaitant failą");
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Serveris veikia per http://localhost:3000");
});
