import express from "express";
import path from "path";
const app = express();

app.use(express.static(path.join(__dirname, "/build")));
const dev = process.env.NODE_DEV !== 'production' //true false

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
