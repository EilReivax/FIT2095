class Events{
    constructor(name, description = "", startDate, durationMins, isActive = true, image = "default_image", capacity = 1000, ticketsAvail = capacity, categoryId){
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.durationMins = durationMins;
        this.isActive = isActive;
        this.image = image;
        this.capacity = capacity
        this.ticketsAvail = ticketsAvail;
        this.categoryId = categoryId;

        this.id = this.generateID();
    }

    generateID(){
        let letter1 = getRandomLetter();
        let letter2 = getRandomLetter();
        let num = getRandomNum(9999);
        let id = `E${letter1}${letter2}-${num}`;
        return id;
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

module.exports = Events;