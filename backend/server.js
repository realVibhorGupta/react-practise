import express from "express";
import path from "path";
import jwt from "jwt";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
// server side rendering in dom
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
const app = express();
const authConfig = require("../src/auth_config.json");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin }));
app.use(morgan("dev"));
app.use(helmet());

app.use(express.static(path.join(__dirname, "/build")));
const dev = process.env.NODE_DEV !== "production"; //true false

const PORT = 3000;
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});
// server side rendering
app.use(express.static("./build", { index: false }));
app.get("/", (req, res) => {
  const reactApp = renderToString(
    <StaticRouter location={req.url}></StaticRouter>
  );

  return res.send(`<html>
  <body>
    <div id='root'></div>
  </body>
  </html>`);
});

app.get();
app.listen(PORT, () => {
  console.log(`Server running  on port ${PORT}`);
});
