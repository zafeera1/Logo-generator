const { Circle, Triangle, Square } = require('./shapes');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');


async function main() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: input => input.length <= 3 ? true : 'Text must be up to three characters long.'
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal number):'
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Triangle', 'Square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal number):'
      }
    ]);

    let shape;
    switch (userInput.shape) {
      case 'Circle':
        shape = new Circle(50); 
        break;
      case 'Triangle':
        shape = new Triangle(100); 
        break;
      case 'Square':
        shape = new Square(100); 
        break;
    }
    shape.color = userInput.shapeColor;
    const svg = `<svg width="300" height="200">${shape.generateSVG()}<text x="150" y="180" fill="${userInput.textColor}" font-size="24" text-anchor="middle">${userInput.text}</text></svg>`;

    const examplesDir = path.join(__dirname, 'Examples');
    if (!fs.existsSync(examplesDir)) {
      fs.mkdirSync(examplesDir);
    }

    const filePath = path.join(examplesDir, 'logo.svg');
    fs.writeFileSync(filePath, svg);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();

