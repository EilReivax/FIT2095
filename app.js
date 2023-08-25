const express = require('express');
const path = require('path');
const EventCategory = require('./category');
const Events = require('./events');

const VIEWS_PATH = path.join(__dirname, "/views/");

const PORT_NUMBER = 8080;

let app = express();

app.use(express.static("node_modules/bootstrap/dist/css"));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(express.urlencoded({ extended: true }));

app.listen(PORT_NUMBER, function() {
    console.log(`listening on port ${PORT_NUMBER}`);
});

app.get('/', function (req, res) {
    res.render("index");
})

app.get('/category/32528558/add', function (req,res){
    res.render("add-category");
})

app.get('/category/32528558/view-all', function(req,res){
    res.render("view-categories", {records: categoryDb});
})

app.post('/add-category-post', function (req,res){
    let newCategory = new EventCategory(req.body.name, req.body.description, req.body.image);

    categoryDb.push(newCategory);

    console.log(newCategory);
    console.log(categoryDb);

    res.redirect('/category/32528558/view-all');
})

categoryDb = [];

app.get('/category/32528558/delete', function(req,res){
    res.render('delete-category');
})

app.post('/delete-event-category', function(req,res){
    let deleteID = req.body.id;
    for (let i = 0; i < categoryDb.length; i++){
        if (categoryDb[i].id == deleteID){
            categoryDb.splice(i,1);
        }
    }

    res.redirect('category/32528558/view-all');
})