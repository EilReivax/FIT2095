const express = require('express');
const path = require('path');
const EventCategory = require('./category');
const Event = require('./event');

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

<<<<<<< app.js
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
=======
app.get('/event/michael/add', function (req, res) {
    res.sendFile(__dirname + "/views/add-event.html");
})

app.post('/event/michael/add', function (req,res) {
    let isActive;

    if (req.body.isActive == true) {
        isActive = true;
    } else {
        isActive = false;
    }
    let newEvent = new Event(req.body.name, req.body.description, req.body.startDate, req.body.duration, isActive, req.body.image, req.body.capacity, req.body.availability, req.body.categoryId)

    eventdb.push(newEvent);

    console.log(newEvent);
    console.log(eventdb);

    res.redirect('/event/michael/view-all');
})

app.get('/event/michael/view-all', function(req, res) {
    res.render("view-events", {events: eventdb});
})

app.get('/event/michael/view-soldout', function(req, res) {
    let events = [];

    for (let i = 0; i < eventdb.length; i++) {
        if (eventdb[i].availability <= 0) {
            events.push(eventdb[i]);
        }
    }

    res.render("view-soldout", {events: events});
})

app.get('/category/michael/view-details', function(req, res) {
    res.render("view-category-details");
})

app.get('/event/michael/delete'), function(req, res) {
    res.sendFile(__dirname + "/views/delete-event.html")
}

app.post('/event/michael/delete', function(req, res) {
    let id = parseInt(req.query.id);
    for (let i = 0; i < eventdb.length; i++) {
        if (eventdb[i].id === id) {
            eventdb.splice(i, 1);
            break;
        }
    }
    res.redirect("/event/michael/view-all");
})

categorydb = [];
let eventdb = [];

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
>>>>>>> app.js


