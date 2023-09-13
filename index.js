const fs = require('fs');
const generateSVG = require('./shapes/shapes.js');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: `Please select a shape for your logo.`,
            choices: ['Circle', 'Triangle', 'Rectangle', 'Ellipse']
        },
        {
            type: 'input',
            name: 'color',
            message: 'Please input a color or hexcode.'
        },
        {
            type: 'input',
            name: 'textInput',
            message: 'Please input your logo text, it must be between 1-3 characters in length.'
        },
        {
            type: 'input',
            name: 'fontColor',
            message: 'Please input a font color or hexcode.'
        },
        {
            type: 'input',
            name: 'fontFamily',
            message: 'Enter a font family for your logo text.'
        }
        
    ])
.then((data) => {
    const {shape, color, textInput, fontColor, fontFamily} = data;
    console.log(data);
    console.log(generateSVG(data));
    if (textInput < 1 || textInput > 3) {
        console.log('Logo text must include between 1-3 characters.')
        return;
    }
fs.writeFile('logo.svg', generateSVG(data), (err) =>
err ? console.log(err) : console.log('Success!')
);
})