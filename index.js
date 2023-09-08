const fs = require('fs');
const shapes = require('./shapes/shapes');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: `Please select a shape for your logo.`,
            choices: ['Circle', 'Triangle', 'Rectangle', `Ellipse`]
        },
        {
            type: 'input',
            name: 'color',
            message: 'Please input a color or hexcode.'
        },
        {
            input: 'input',
            name: 'text',
            message: 'Please input your logo text, it must be between 1-3 characters in length.'
        }
        
    ])
.then((data) => {
    console.log(data)
    const {shape, color, text} = data;
    if (text < 1 || text > 3) {
        console.log('Logo text must include between 1-3 characters.')
        return;
    }
    //generateMarkdown fxn accepts data and inputs into readme template and outputs completed readme to fs
fs.writeFile('logo.svg', generateSVG(data), (err) =>
err ? console.log(err) : console.log('Success!')
);
})