var express = require("express");

var app = express();

app.use(express.static("my_MODULS"));

app.get("/", function(req, res){

res.redirect("index.html");

});

app.listen(3000, function(){

console.log("Example is running on port 3000");

});