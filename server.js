const connect = require("connect");
const app = connect();

function helloWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
}

function logger(req, res, next) {
  console.log(reg.method, reg.url);
  next();
}

function goodbyeWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Goodbye World");
}

app.use(logger);
app.use("/hello", helloWorld);
app.use("/goodbye", goodbyeWorld);

app.listen(3000);
console.log("Server running at http://localhost:3000/");
