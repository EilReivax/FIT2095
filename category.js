let fs = require('fs')

class EventCategory{
    constructor(name, description = "", image = ""){
        this.name = name;
        this.id = this.generateID();
        this.description = description;
        this.image = image;
        this.displayImage = this.checkImagePath()

        let date = new Date()
        let todaysDate = date.toLocaleString();
        this.createdAt = todaysDate;
    }

    generateID(){
        let letter1 = getRandomLetter();
        let letter2 = getRandomLetter();
        let num = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
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

    checkImagePath(){
        fs.readFile(this.image, function (error, content){
            if (error){
                return
            }
            else{
                return this.image;
            }
        })
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