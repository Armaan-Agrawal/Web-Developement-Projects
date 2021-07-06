const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")


const app = express();
app.set('view engine', 'ejs');
var items = ["Buy Food", "Cook Food", "Eat Food"]
var workItems = []
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/", function(req, res){

  // let today = new Date();
  // // let day = ""
  //
  // let options = {
  //   weekday: "long",
  //   day: "numeric",
  //   month: "long"
  // }
  //
  // let day = today.toLocaleDateString("en-US", options);

  let day = date.getDay();

  res.render('list', {listTitle: day, newListItems: items});

});

app.get("/work", (req,res) => {
  res.render('list', {listTitle: "Work List", newListItems: workItems});
})

app.get("/about", (req,res) => {
  res.render('about');
})

app.listen(4000, function(){
  console.log("Server started on port 4000.");
});


app.post("/",(req,res) => {
  let item = req.body.newItem;
  if(req.body.list === "Work"){
    workItems.push(item)
    res.redirect("/work")
  } else{
    items.push(item)
    res.redirect("/")
  }

})

app.post("/work",(req,res) => {
  let item = req.body.newItem;
  workItems.push(item)
  res.redirect("/work")
})
