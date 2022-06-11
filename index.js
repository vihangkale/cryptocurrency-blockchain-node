const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const api = require("./Api");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.post("/createCrypto", api.createCrypto);
