const http = require("http");
const routes = require("./routes");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
});

const server = http.createServer(routes.handler);

server.listen(3000);
