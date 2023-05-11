const http = require("http");

const server = http.createServer((res, req) => {
  if (req.url === "./") {
    res.write(`<h1> this is my wbsist </h1>`);
  }

  res.end();
});
