const http = require("http");
const routes = require("./routes");

const express = require("express");

const app = express();

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);
