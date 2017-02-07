var express           = require("express"),
    bodyParser        = require("body-parser");

var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

var newClasses = [];
app.get("/", function(req, res){
    res.render("index");
});

app.get("/class", function(req, res){
    res.render("class");
});

app.get("/chat", function(req, res){
    res.render("chat");
});

app.get("/login", function(req, res){
    res.render("login");
});

//admin

app.get("/admin/post", function(req, res){
    res.render("admin/post");
});
app.get("/admin/classManager", function(req, res){
    res.render("admin/classManager",{newClasses:newClasses});
});

app.post("/admin/classManager", function(req, res){
    //add data from form and add to classes array
    var name = req.body.name;
    var date = req.body.date;
    var time = req.body.time;
    var teacher = req.body.teacher;
    var newClass = {name:name, date:date, time:time, teacher:teacher};
    newClasses.push(newClass);
    //redirect to classManager
    res.redirect("/admin/classManager");
});

app.get("/admin/newClass", function(req, res){
     res.render("admin/newClass");
});

app.get("/admin/students", function(req, res){
    res.render("admin/students");
});
app.get("/admin/admin_chat", function(req, res){
    res.render("admin/admin_chat");
});
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has started"); 
});