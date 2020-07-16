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
let waitlist = [];
// Routes
app.get("/",  function(req,res) {
res.sendfile(path.join(__dirname, "home.html"));

});

app.get("/tables", function(req, res){
    res.sendfile(path.join(__dirname, "tables.html"))

    
});

app.get("/reserve", function(req, res) {
    res.sendfile(path.join(__dirname, "reserve.html"))
})

// information being pulled from array into tables/reserve page
app.get("/api/tables", function(req, res) {
   

    

})
app.get("/api/reserve", function(req,res) {
    
     

    
    console.log(waitlist)
    
})
// Puts the information in the api to update and display on html
app.post("/api/tables", function(req, res) {
    var newTable = req.body;

    console.log(newTable)
    
    tables.push(newTable);

    res.json(newTable)

})

app.post("/api/reserve", function(req, res) {
    var newReservation = req.body
    console.log(newReservation)

    reservation.push(newReservation)
 
     
        
    res.json(newReservation)
})

app.listen(PORT, function(){
    console.log("App listining on PORT" + PORT)
});