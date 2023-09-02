class SVG {
    constructor(height, width) {
        this.heigth = height;
        this.width = width;
    }
    renderContainer() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"></svg>`
    }
};

class Text {
    constructor(fillColor, xAxis, yAxis, fontFamily, fontSize, textAnchor, textInput){
        this.fillColor = fillColor;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
        this.textAnchor = textAnchor;
        this.textInput = textInput;
    }
    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white" font-family='sans-serif>SVG</text>`
    }
};

class Shape {
    constructor(fillColor, xAxis, yAxis, strokeColor) {
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
    }
};

class Rectangle extends Shape {
    constructor(fillColor, xAxis, yAxis, height, width, xRadius, yRadius, strokeColor) {
        super(fillColor, xAxis, yAxis, strokeColor);
        this.height = height;
        this.width = width;
        this.xRadius = xRadius;
        this.yRadius = yRadius;
    }
};

class Circle extends Shape {
    constructor(fillColor, xAxis, yAxis, radius, strokeColor){
        super(fillColor, xAxis, yAxis, strokeColor);
        this.radius = radius;
    }
};

class Ellipse extends Shape {
    constructor(fillColor, xAxis, yAxis, xRadius, yRadius, strokeColor){
        super(fillColor, xAxis, yAxis, strokeColor)
        this.xRadius = xRadius;
        this.yRadius = yRadius;
    }
}