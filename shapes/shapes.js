const { error } = require("console");
const { throwError } = require("rxjs");

class SVG {
    constructor() {
        this.svgShape = '';
        this.text = '';

    }
    render() {
        return `<svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
         ${this.svgShape}
         ${this.text}
         </svg>`
    };
    setText(fontColor, fontFamily, textInput) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${fontColor}" font-family="${fontFamily}">${textInput}</text>`

    };
    setShape(shapeObj) {
        this.svgShape = shapeObj.render();
    };
};

function generateSVG(data) {

    const { shape, color, textInput, fontColor, fontFamily } = data;

    let shapeObj;
    switch (shape) {
        case "Circle":
            shapeObj = new Circle(color);
            break;
        case "Triangle":
            shapeObj = new Triangle(color);
            break;
        case "Ellipse":
            shapeObj = new Ellipse(color);
            break;
        case "Rectangle":
            shapeObj = new Rectangle(color);
            break;

        default:
            throw new Error('Please enter a valid shape!');
    }
    const newLogo = new SVG();
    newLogo.setText(fontColor, fontFamily, textInput);
    newLogo.setShape(shapeObj);
    return newLogo.render();
};


class Shape {
    constructor(color) {
        this.color = color;
    }
    render() {
        throw new Error('render() must be called by a subclass of shape.')
    }
};

class Rectangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
       return `<rect x="50" y="25" width="200px" height="200px" fill="${this.color}"/>`
    }
};

class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<circle cx="150" cy="110" r="80" fill="${this.color}"/>`
    }
};

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<polygon points="300 200, 150 0, 0 200" fill="${this.color}"/>`
    }
}

class Ellipse extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return `<ellipse cx="150" cy="110" rx="100" ry="60" fill="${this.color}"/>`
    }
}

module.exports = generateSVG;