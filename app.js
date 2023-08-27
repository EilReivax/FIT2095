const express = require('express');
const path = require('path');
const EventCategory = require('./category');
const Event = require('./event');

const VIEWS_PATH = path.join(__dirname, "/views/");

const PORT_NUMBER = 8080;

let app = express();

app.use(express.static("node_modules/bootstrap/dist/css"));
app.use(express.static("images"));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(express.urlencoded({ extended: true }));

app.listen(PORT_NUMBER, function() {
    console.log(`listening on port ${PORT_NUMBER}`);
});

// Home Page
app.get('/', function (req, res) {
    res.render("index");
})

// Tasks Group 1 (Anh Nguyen)
app.get('/category/32528558/add', function (req,res){
    res.render("add-category");
})

app.post('/add-category-post', function (req,res){
    let newCategory = new EventCategory(req.body.name, req.body.description, req.body.image);

    categoryDb.push(newCategory);

    res.redirect('/category/32528558/view-all');
})

app.get('/category/32528558/view-all', function(req,res){
    res.render("view-categories", {records: categoryDb});
})

app.get('/category/32528558/search-category', function(req, res){
    let keyword = req.query.keyword.toLowerCase();

    let filteredDb = [];

    for (let i = 0; i < categoryDb.length; i++){
        if (categoryDb[i].description.toLowerCase().includes(keyword)){
            filteredDb.push(categoryDb[i])
        }
    }

    res.render('search-category', {records: filteredDb});
})

app.get('/event/32528558/event-details/:eventPos', function(req, res){
    let eventPos = parseInt(req.params.eventPos);

    let selectedEvent = eventdb[eventPos];

    res.render('event-details', {event: selectedEvent})
})

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

// Tasks Group 2 (Michael Lie)
// Add event
app.get('/event/michael/add', function (req, res) {
    res.sendFile(__dirname + "/views/add-event.html");
})

app.post('/event/michael/add', function (req,res) {
    let newEvent = new Event(req.body.name, req.body.description, req.body.startDate, req.body.duration, req.body.isActive, req.body.image, req.body.capacity, req.body.availability, req.body.categoryId)

    eventdb.push(newEvent);

    res.redirect('/event/michael/view-all');
})

// List all events
app.get('/event/michael/view-all', function(req, res) {
    res.render("view-events", {events: eventdb});
})

// List all soldout events
app.get('/event/michael/view-soldout', function(req, res) {
    let events = [];

    for (let i = 0; i < eventdb.length; i++) {
        if (eventdb[i].availability == 0) {
            events.push(eventdb[i]);
        }
    }

    res.render("view-events", {events: events});
})

// View category details
app.get('/category/michael/view-details/:id', function(req, res) {
    let id = req.params.id;
    let events = [];

    for (let i = 0; i < categoryDb.length; i++) {
        if (categoryDb[i].id == id) {
            let category = categoryDb[i];
            for (let j = 0; j < eventdb.length; j++) {
                if (eventdb[j].categoryId == id) {
                    events.push(eventdb[j]);
                }
            }
            res.render("view-category-details", {category: category, events: events});
        }
    }
})

// Delete event by ID
app.get('/event/michael/delete', function(req, res) {
    let id = req.query.id;
    for (let i = 0; i < eventdb.length; i++) {
        if (eventdb[i].id == id) {
            eventdb.splice(i, 1);
        }
    }
    res.redirect("/event/michael/view-all");
})

// Category and Event Databases
let eventdb = [];
let categoryDb = [];