// const http = require("http");
// const PORT = 3500;

// function rqListener(req, res) {
//   console.log(req);
//   res.write("panneer selvam");
//   res.end();
// }

// const server = http.createServer(rqListener);
// server.listen(PORT);

// console.log("Server is running on : " + PORT);
// _________________________________________________________________________________________________
// const http = require("http");
// const PORT = 3500;

// // function rqListener(req, res) {
//   //   console.log(req);
//   //   res.write("panneer selvam");
//   //   res.end();
//   // }

//   const server = http.createServer((req, res) => {
//     console.log(req);
//     res.write("panneer selvam");
//     res.end();
//     process.exit();
//   });
//   server.listen(PORT);

//   console.log("Server is running on : " + PORT);

// _________________________________________________________________________________________________

// const http = require("http");
// const PORT = 3500;

// const server = http.createServer((req, res) => {
//   res.write("panneer selvam");
//   console.log(req.url);
// });
// server.listen(PORT);

// console.log("Server is running on : " + PORT);
// _________________________________________________________________________________________________

// const http = require("http");
// const PORT = 3500;

// const server = http.createServer((req, res) => {
//   res.write("panneer selvam");
//   console.log(req.method);
// });
// server.listen(PORT);

// console.log("Server is running on : " + PORT);
// // _________________________________________________________________________________________________

// const http = require("http");
// const PORT = 3500;

// const server = http.createServer((req, res) => {
//   // res.write("panneer selvam");
//   console.log(req.headers);
// });
// server.listen(PORT);

// console.log("Server is running on : " + PORT);

// // _________________________________________________________________________________________________

// const http = require("http");
// const PORT = 3500;

// const server = http.createServer((req, res) => {
//   res.write("panneer selvam");
//   res.end();
// });
// server.listen(PORT);

// console.log("Server is running on : " + PORT);

// // _________________________________________________________________________________________________

// const http = require("http");
// const PORT = 3500;

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.setHeader("Content-type", "text/html");
//   res.write("<html>");
//   res.write("<head> <title> Node JS </title> </head>");
//   res.write("<body> <h1> Hello World </h1> </body>");
//   res.write("</html>");
//   res.write("panneer selvam");
//   res.end();
// });
// server.listen(PORT);

// console.log("Server is running on : " + PORT);
// // _________________________________________________________________________________________________

// const http = require("http");
// const { text } = require("stream/consumers");
// const PORT = 3500;

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   if (url === "/") {
//     res.setHeader("Content-type", "text/html");
//     res.write("<html>");
//     res.write("<head> <title> Login </title> </head>");
//     res.write(
//       '<body> <h1> Login Form</h1> <form action="/message" method="POST"> <input type="text" name="message"> <input type="submit" value="send"> </form> </body>'
//     );
//     res.write("</html>");
//     res.write("panneer selvam");
//     return res.end();
//   }

//   console.log(req.url);
//   res.setHeader("Content-type", "text/html");
//   res.write("<html>");
//   res.write("<head> <title> Node JS </title> </head>");
//   res.write("<body> <h1> Hello World </h1> </body>");
//   res.write("</html>");
//   res.write("panneer selvam");
//   res.end();
// });
// server.listen(PORT);
// console.log("Server is running on : " + PORT);
// console.log("Server is running on : " + PORT);
// // _________________________________________________________________________________________________

// const http = require("http");
// const fs = require("fs");
// const { text } = require("stream/consumers");
// const PORT = 3500;

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === "/") {
//     res.setHeader("Content-type", "text/html");
//     res.write("<html>");
//     res.write("<head> <title> Login </title> </head>");
//     res.write(
//       '<body> <h1> Login Form</h1> <form action="/message" method="POST"> <input type="text" name="message"> <input type="submit" value="send"> </form> </body>'
//     );
//     res.write("</html>");
//     res.write("panneer selvam");
//     return res.end();
//   }

//   if (url === "/message" && method == "POST") {
//     fs.writeFileSync("first.txt", "create text file");
//     res.setHeader("Location", "/");
//     res.statusCode = 302;
//     return res.end();
//   }

//   console.log(req.url);
//   res.setHeader("Content-type", "text/html");
//   res.write("<html>");
//   res.write("<head> <title> Node JS </title> </head>");
//   res.write("<body> <h1> Hello World </h1> </body>");
//   res.write("</html>");
//   res.write("panneer selvam");
//   res.end();
// });
// server.listen(PORT);
// console.log("Server is running on : " + PORT);

// _________________________________________________________________________________________________

const http = require("http");
const fs = require("fs");
const { text } = require("stream/consumers");
const PORT = 3500;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head> <title> Login </title> </head>");
    // res.write(
    //   '<body> <h1> Login Form</h1> <form enctype="multipart/form-data" action="/message" method="POST"> <input type="text" name="message"> <input type="submit" value="send"> </form> </body>'
    // );
    res.write(
      "<html>" +
        "<head>" +
        "<title>Login</title>" +
        "</head>" +
        "<body>" +
        "<h1>Login Form</h1>" +
        '<form action="/message" method="POST" enctype="multipart/form-data">' +
        '<input type="text" name="message">' +
        '<input type="file" name="file">' +
        '<input type="submit" value="send">' +
        "</form>" +
        "<p>panneer selvam</p>" + // Text moved within the body
        "</body>" +
        "</html>"
    );
    res.write("</html>");
    res.write("panneer selvam");
    return res.end();
  }

  if (url === "/message" && method == "POST") {
    req.on("data", (chunk) => {
      console.log("Chunk data : " + chunk);
      console.log("chunk data : ");
      console.log(chunk);
    });

    fs.writeFileSync("first.txt", "create text file");
    res.setHeader("Location", "/");
    res.statusCode = 302;
    return res.end();
  }

  console.log(req.url);
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head> <title> Node JS </title> </head>");
  res.write("<body> <h1> Hello World </h1> </body>");
  res.write("</html>");
  res.write("panneer selvam");
  res.end();
});
server.listen(PORT);
console.log("Server is running on : " + PORT);
