// Lab 1.1: Cài đặt Node.js và tạo ứng dụng Node.js đầu tiên
// const fs = require("fs");
// fs.writeFileSync("hello.txt", "Hello from Node.js");

// Lab 1.2: Tạo Node Server
const http = require("http");

const sever = http.createServer((req, res) => {
  console.log(req);
});

server.listen();
