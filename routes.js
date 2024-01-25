const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head> <title> Login </title> </head>");
    res.write(
      '<body> <h1> Login Form</h1> <form enctype="multipart/form-data" action="/message" method="POST"> <input type="text" name="message"> <input type="submit" value="send"> </form> </body>'
    );

    res.write("</html>");
    res.write("panneer selvam");
    return res.end();
  }

  if (url === "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=");
      fs.writeFileSync("hello.txt", "create text file");
      fs.writeFileSync("hello.txt", message[1]);
    });

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
};

// module.exports = requestHandler;

module.exports = {
  handler: requestHandler,
  someText: "Print text ;ldskjgf;ldskjgf;lkdsgj",
};

// exports.handler = requestHandler;
// exports.someText = "Print some text";

// module.exports.handler = requestHandler;
// module.exports.someText = "print some text";
