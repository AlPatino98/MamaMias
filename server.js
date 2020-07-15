var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// variable arra will go here for entered data
let tables = [];
let reservation = [];
// Routes

app.get("/",  function(req,res) {
res.sendfile(path.join(__dirname, "home.html"));

});

app.get("/tables", function(req, res){
    res.sendfile(path.join(__dirname, "tables.html"))
})
app.get("/reserve", function(req, res) {
    res.sendfile(path.join(__dirname, "reserve.html"))
})




app.get("/api/tables", function(req, res) {
    return res.json(tables)

})
app.get("/api/reserve", function(req,res) {
    return res.json(reservation)
})

app.post("api/tables")

app.listen(PORT, function(){
    console.log("App listining on PORT" + PORT)
});