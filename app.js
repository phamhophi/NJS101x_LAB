// Lab 1.1: Cài đặt Node.js và tạo ứng dụng Node.js đầu tiên
// const fs = require("fs");
// fs.writeFileSync("hello.txt", "Hello from Node.js");

// Lab 1.2: Tạo Node Server
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit()
  res.setHeader("Content-Type", "tetx/html");
});

server.listen(3000);
