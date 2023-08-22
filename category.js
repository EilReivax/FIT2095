class EventCategory{
    constructor(name, description = "", image = ""){
        this.name = name;
        this.id = this.generateID();
        this.description = description;
        this.image = image;

        let date = new Date()
        let todaysDate = date.toLocaleString();
        this.createdAt = todaysDate;
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

    setImage(newImage){
        this.image = newImage;
    }

    setDescription(newDescription){
        this.description = newDescription;
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