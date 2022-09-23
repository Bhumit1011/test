const express = require('express');
const app = express();

const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }))

var mysql = require('mysql');

var connection = mysql.createConnection({

    host : "localhost",
    user : "root",
    password : "",
    database : "creative",

})


app.get('/',function(req,res){

    res.sendFile(path.join(__dirname+'/index.html'));

})

app.post('/submitdata',function(req,res){

    console.log(req.body);

    var name = req.body.name;
    var surname = req.body.surname;
    var email = req.body.email;

    var addData = "INSERT into student (Name , Surname ,Email) VALUES ('"+name+"','"+surname+"','"+email+"') ";

    connection.query(addData,function(err , result ,fields){

        if(err) throw err;

        console.log("Data Inserted........");

        res.end();

    })

})


app.listen(4000);