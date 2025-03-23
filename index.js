const express = require("express");
const app = express();
const port = 8080;
const ejsMate = require('ejs-mate');
const path = require('path');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/",(req,res)=>{
    res.render("./Simon.ejs")
})

app.listen(port),()=>{
    console.log(`listining to port ${port}`)
}