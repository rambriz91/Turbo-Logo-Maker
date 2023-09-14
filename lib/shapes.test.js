const {Ellipse, Circle, Square, Triangle} = require('./shapes');

describe('newCircle.render()',() => {
    it('should take in a color and render an svg tag with the selected fill color', ()=> {
        // arrange
        let color ='Blue';
        const newCircle = new Circle(color);
        // act
        const result =  newCircle.render();
        //assert
        expect(result).toEqual(`<circle cx="150" cy="110" r="80" fill="Blue"/>`)
    })
});

describe('newSquare.render()', () => {
    it('should take in a color and render an svg tag with the selected fill color', () => {
        // arrange
        let color ='Red';
        const newSquare = new Square(color);
        // act
        const result = newSquare.render();
        //assert
        expect(result).toEqual(`<rect x="50" y="25" width="200px" height="200px" fill="Red"/>`)
    })
});

describe('newEllipse.render()', () => {
    it('should take in a color and render an svg tag with the selected fill color.', () => {
        // arrange
        let color = "Yellow";
        const newEllipse = new Ellipse(color);
        // act
        const result = newEllipse.render();
        // assert
        expect(result).toEqual(`<ellipse cx="150" cy="110" rx="100" ry="60" fill="Yellow"/>`);
    })
});

describe('newTriangle.render()', () => {
    it('should take in a color and render an svg tag wit hthe selected fill color.', () => {
        // arrange
        let color = 'Green';
        const newTriangle = new Triangle(color);
        // act 
        const result = newTriangle.render();
        //assert
        expect(result).toEqual(`<polygon points="300 200, 150 0, 0 200" fill="Green"/>`)
    })
});
