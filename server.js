const express = require("express");
const mysql = require("mysql");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => getItems(res));
app.get("/post", (req, res) => res.send("Post a product"));
app.get("/bid", (req, res) => res.send("Bid on a product"));

app.listen(port, () => console.log("listening on ", port));

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "items_db"
});

connection.connect(err => {
  if (err) throw err;
  console.log("connected as id", connection.threadId);
});

getItems = res => {
  console.log("Getting items...");
  const query = connection.query("SELECT * FROM items", (err, items) => {
    if (err) throw err;
    res.json(items);
  });
};
