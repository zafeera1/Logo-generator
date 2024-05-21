const { Circle, Triangle, Square } = require('../Lib/shapes');

test('Circle generates correct SVG', () => {
  const circle = new Circle(50, 'red');
  expect(circle.generateSVG()).toEqual('<circle cx="150" cy="100" r="50" fill="red" />');
});

test('Triangle generates correct SVG', () => {
  const triangle = new Triangle(100, 'blue');
  const height = Math.sqrt(3) / 2 * 100; 
  const expectedSVG = `<polygon points="150,${100 + height / 2} 100,${100 - height / 2} 200,${100 - height / 2}" fill="blue" />`;
  expect(triangle.generateSVG()).toEqual(expectedSVG);
});

test('Square generates correct SVG', () => {
  const square = new Square(100, 'green');
  expect(square.generateSVG()).toEqual('<rect x="100" y="50" width="100" height="100" fill="green" />');
});
