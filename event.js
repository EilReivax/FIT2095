let fs = require('fs')

class Event{
    constructor(name, description = "", startDate, duration, isActive = true, image, capacity = 1000, availability = capacity, categoryId){
        this.id = generateID();
        this.name = name;
        this.description = description;
        this.startDate = new Date(startDate);
        this.duration = duration;
        this.isActive = isActive;
        this.image = checkImagePath();
        this.capacity = capacity
        this.availability = availability;
        this.categoryId = categoryId;
    }

    // Getters
    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get startDate() {
        return this._startDate;
    }

    get duration() {
        return this._duration;
    }

    get isActive() {
        return this._isActive;
    }

    get image() {
        return this._image;
    }

    get capacity() {
        return this._capacity;
    }

    get availability() {
        return this._availability;
    }

    get categoryId() {
        return this._categoryId;
    }

    // Setters
    set name(newName) {
        this._name = newName;
    }

    set description(newDescription) {
        this._description = newDescription;
    }

    set startDate(newStartDate) {
        this._startDate = newStartDate;
    }

    set duration(newDuration) {
        this._duration = newDuration;
    }

    set isActive(newIsActive) {
        this._isActive = newIsActive;
    }

    set image(newImage) {
        this._image = newImage;
    }

    set capacity(newCapacity) {
        this._capacity = newCapacity;
    }

    set availability(newAvailability) {
        this._availability = newAvailability;
    }

    set categoryId(newCategoryId) {
        this._categoryId = newCategoryId;
    }

    // Methods
    end() {
        let endDate = new Date(this.startDate.getTime() + this.duration * 60000);
        return endDate.toLocaleString();
    }
}

function getRandomNum(max){
    return Math.floor(Math.random() * max);
}

function getRandomLetter(){
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    randInt = getRandomNum(26);
    return alphabet[randInt];
}

function generateID() {
    let letter1 = getRandomLetter();
    let letter2 = getRandomLetter();
    let num = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    let id = `E${letter1}${letter2}-${num}`;
    return id;
}

function checkImagePath() {
    fs.readFile(this.image, function (error, content){
        if (error){
            return
        }
        else{
            return this.image;
        }
    })
}

module.exports = Event;