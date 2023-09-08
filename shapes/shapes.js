// class SVG extends Shape{
//     constructor(height, width) {
//         this.heigth = height;
//         this.width = width;
//     }
//     render() {
//         return `<svg version="1.1"
//         width="300" height="200"
//         xmlns="http://www.w3.org/2000/svg"></svg>`
//     }
// };

const { error } = require("console");
const { throwError } = require("rxjs");

generateSVG(data) {

    

};


class Shape {
    constructor(fillColor) {
        this.fillColor = fillColor;
    }
    render() {
        throw new Error('render() must be called by a subclass of shape.')
    }
};

class Text extends Shape {
    constructor(fillColor, fontFamily, textInput){
        super(fillColor);
        this.fontFamily = fontFamily;
        this.textInput = textInput;
    }
    render() {
        if(this.textInput.length > 3 && this.textInput.length < 1) {
            throw new Error('textInput must be less than three characters and have at least one character.')
        }
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fillColor}" font-family='${this.fontFamily}>${this.textInput}</text>`
    }
};

class Rectangle extends Shape {
    constructor(fillColor) {
        super(fillColor);
    }
    render() {
        `<rect x="150" y="100" rx="10" ry="10" width="200" height="200" fill="${this.fillColor}/>`
    }
};

class Circle extends Shape {
    constructor(fillColor){
        super(fillColor);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}"/>`
    }
};

class Triangle extends Shape {
    constructor(fillColor){
        super(fillColor);
    }
    render() {
        return `<polygon points="300 300, 150 0, 0 300" fill="${this.fillColor}"/>`
    }
}

class Ellipse extends Shape {
    constructor(fillColor){
        super(fillColor)
    }
    render() {
        return `<ellipse cx="150" cy="100" rx="100" ry="60" fill="${this.fillColor}/>`
    }
}