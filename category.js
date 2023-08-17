class EventCategory{
    constructor(name){
        this.name = name;
        this.id = this.generateID();
        this.description = "";
        this.image = "";
        this.createdAt = "";
    }

    generateID(){
        let letter1 = getRandomLetter();
        let letter2 = getRandomLetter();
        let num = getRandomNum(9999);
        let ID = `C${letter1}${letter2}-${num}`;
        return ID;
    }

    getID(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getDescription(){
        return this.description;
    }

    getImage(){
        return this.image;
    }

    getCreatedAt(){
        return this.createdAt;
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

module.exports = EventCategory;