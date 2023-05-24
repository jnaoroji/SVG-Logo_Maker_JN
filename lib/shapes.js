const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

// function that checks the value of 'shape' property and calls appropriate class helper function
//returns a svg logo string
function generateLogo({text, textC, shape, logoC}) {
    let svgLogo = '';
        
    if (shape === "circle"){
        const circle = new Circle();
        svgLogo = circle.generateSvgLogo({text, textC, logoC});
    }else if (shape === "square"){
        const square = new Square();
        svgLogo = square.generateSvgLogo({text, textC, logoC});
    }else if (shape === "triangle"){
        const triangle = new Triangle ();
        svgLogo = triangle.generateSvgLogo({text, textC, logoC});
    }    
    return svgLogo;
}

module.exports = {generateLogo};

