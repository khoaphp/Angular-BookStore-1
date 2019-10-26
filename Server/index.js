var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.listen(3000);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://khoapham:ldiLnv4Odwsm4f5D@cluster0-qah5q.mongodb.net/BookStore240919?retryWrites=true&w=majority",  {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if(err){
        console.log("Mongo connect error " + err)
    }else{
        console.log("Mongo connected successfull.");
    }
});

app.get("/", function(req, res){
    res.render("home", {page:"home"});
});

app.get("/cate", function(req, res){
    res.render("home", {page:"cate"});
});

app.get("/login", function(req, res){
    res.render("login");
});