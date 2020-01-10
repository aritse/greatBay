var inqurier = require("inquirer");
var mysql = require("mysql");
var express = require("express");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password", //remember to change password to password which we did
    database: "items_db"
  });


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
  
  });
  


//created the Q arrays
const forSale = [
    "What is your item?",
    "What category is your item?",
    "How much would you like to sell your item for?",
    "How many of those items would you like to sell?"
]

const toBuy = [
    "What are you looking for?",
    "What category would you like to search for?",
    "How much would you like to bid?",
    "Quantity?" 
]


function afterConnection() {
    connection.query("SELECT * FROM items", function(err, res) {
      if (err) throw err;
      console.table(res);
      connection.end(); //always end
    });
  }