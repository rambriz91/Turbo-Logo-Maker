const { error } = require("console");
const { throwError } = require("rxjs");

class SVG {
    constructor() {
        this.shape = '';
        this.text = '';

    }
    render() {
        return `<svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
         ${this.shape}
         ${this.text}
         </svg>`
    };
    setText(fontColor, fontFamily, textInput) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${fontColor}" font-family='${fontFamily}>${textInput}</text>`
        
    };
    setShape(shape) {
        this.shape = shape.render();
    };
};

function generateSVG(data) {
   
    const { shape, color, textInput, fontColor, fontFamily } = data;

    const newLogo = new SVG();

    //newLogo.render();
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

     newLogo.setText(fontColor, fontFamily, textInput);
    newLogo.setShape(shape);

};


class Shape {
    constructor(color) {
        this.color = color;
    }
    render() {
        throw new Error('render() must be called by a subclass of shape.')
    }
};

class Text {
    constructor(textInput, fontColor, fontFamily) {
        this.textInput = textInput;
        this.fontColor = fontColor;
        this.fontFamily = fontFamily;

    }
    renderText() {
        if (this.textInput.length > 3 && this.textInput.length < 1) {
            throw new Error('textInput must be less than three characters and have at least one character.')
        }
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fontColor}" font-family='${this.fontFamily}>${this.textInput}</text>`
    }
};

class Rectangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        `<rect x="150" y="100" rx="10" ry="10" width="200" height="200" fill="${this.color}/>`
    }
};

class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
};

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<polygon points="300 300, 150 0, 0 300" fill="${this.color}"/>`
    }
}

class Ellipse extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return `<ellipse cx="150" cy="100" rx="100" ry="60" fill="${this.color}/>`
    }
}

module.exports = generateSVG;