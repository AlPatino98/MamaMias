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
    res.json(tables);
 

    

})
app.get("/api/waitlist", function(req,res) { 
   res.json(waitlist);
    })


// Puts the information in the api to update and display on html
app.post("/api/tables", function(req, res) {
    
  if (tables.length  < 5) { 
       tables.push(req.body);
       return res.json(true);
    } else {
        waitlist.push(req.body);
        return res.json(false)
    }
 

})


app.listen(PORT, function(){
    console.log("App listining on PORT" + PORT)
});