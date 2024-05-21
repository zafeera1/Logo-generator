class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  generateSVG() {
    return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
  }
}

class Triangle {
  constructor(sideLength, color) {
    this.sideLength = sideLength;
    this.color = color;
  }

  generateSVG() {
    const height = Math.sqrt(3) / 2 * this.sideLength;
    return `<polygon points="150,${100 + height / 2} ${150 - this.sideLength / 2},${100 - height / 2} ${150 + this.sideLength / 2},${100 - height / 2}" fill="${this.color}" />`;
  }
}

class Square {
  constructor(sideLength, color) {
    this.sideLength = sideLength;
    this.color = color;
  }

  generateSVG() {
    return `<rect x="${150 - this.sideLength / 2}" y="${100 - this.sideLength / 2}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
