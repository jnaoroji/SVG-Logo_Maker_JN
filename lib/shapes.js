// function that checks the value of 'shape' property and calls appropriate helper function
//returns a svg logo string
function generateLogo({text, textC, shape, logoC}) {
    let svgLogo = '';
        
    if (shape === "circle")
        svgLogo = shapesCircle({text, textC, logoC});
    else if (shape === "square")
        svgLogo = shapesSquare({text, textC, logoC});
    else if (shape === "triangle")
        svgLogo = shapesTriangle({text, textC, logoC});
        
    return svgLogo;
}
      
    

//helper functions that help generate logos based on the shape the user chooses
function shapesCircle ({ text, textC,logoC}){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      
    <circle cx="150" cy="100" r="80" fill="${logoC}" />
      
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textC}">${text}</text>
      
    </svg>`
};
function shapesSquare ({ text, textC,logoC}){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <rect width="200" height="200" fill="${logoC}" />
      
    <text x="100" y="100" dominant-baseline="middle" text-anchor="middle" fill="${textC}" font-size="48">${text}</text>
      
    </svg>`
};
function shapesTriangle ({ text, textC,logoC}){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <polygon points="150,18 244,182 56,182" fill="${logoC}" />
      
    <text x="150" y="130" dominant-baseline="middle" text-anchor="middle" fill="${textC}" font-size="48">${text}</text>  
    
    </svg>`
};

module.exports = {generateLogo};

