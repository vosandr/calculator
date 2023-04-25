const express = require("express");
const app = express();

const port = 8080

app.set("view engine", "pug");
app.set("views"); // установка пути к представлениям. По умолчанию - views

app.use("/", function(request, response){
    response.render("index");
}); 
app.use(express.static(path.join(__dirname, 'views')));

app.listen(port, () => console.log('http://localhost:${port}'));
