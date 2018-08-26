const express = require("express");
const mysql = require("mysql")
const cors = require("cors")
const bodyParser=require('body-parser');
const api = require("./routes/todoRoutes")
const connection = require("./connection")
const app = express();

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: '',
//     database: "todo_list"
// })

connection.connect(err => {
    if(err)
        return err
});

app.use(cors())
app.use(bodyParser.json())

app.use('/api',api);

app.listen(5000,() => console.log("started"))