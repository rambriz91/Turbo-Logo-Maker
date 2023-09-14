const {Ellipse, Circle, Rectangle, Triangle} = require('./shapes');

describe('newCircle.render()',() => {
    it('should take in a color and render an svg tag with the selected fill color', ()=> {
        // arrange
        let color ='Blue';
        const newCircle = new Circle(color);

        // act
        const result =  newCircle.render(color)

        //assert
        expect(result).toEqual(`<circle cx="150" cy="110" r="80" fill="${this.color}"/>`)
    })
});

