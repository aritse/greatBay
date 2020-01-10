const express = require("express");
const mysql = require("mysql");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => getItems(res));
app.post("/post", (req, res) => postItem(req, res));
// app.post("/bid", (req, res) => res.send("Bid on a product"));

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

postItem = (req, res) => {
  const query = connection.query("INSERT INTO items SET ?", [{ item: req.body.item, price: req.body.price }], (err, data) => {
    if (err) throw err;
    res.json(data);
  });
  console.log(query.sql);
};
