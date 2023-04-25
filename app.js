
const express = require("express");
const app = express();
const path = require("path")

const port = 8081

app.use("/static", express.static(path.join(__dirname, 'static')));

app.set("view engine", "pug");
app.set("views");

app.use("/", function(req, res){
    res.render("index");
}); 


app.listen(port, () => console.log(`http://localhost:${port}`));
