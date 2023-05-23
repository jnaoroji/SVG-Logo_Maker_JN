
function generateLogo ({text, textC, shape, logoC}){
    console.log(`this logo will be a ${shape}`)
    if (shape === "circle")
    shapesCircle({text, textC, logoC});
    if (shape === "square")
    shapesSquare({text, textC, logoC});
    if (shape === "triangle")
    shapesTriangle({text, textC, logoC});
}

function shapesCircle ({ text, textC,logoC}){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      
    <circle cx="150" cy="100" r="80" fill="${logoC}" />
      
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textC}">${text}</text>
      
    </svg>`
};
function shapesSquare ({ text, textC,logoC}){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <rect width="100%" height="100%" fill="${logoC}" />
      
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textC}" font-size="48">${text}</text>
      
    </svg>`
};
function shapesTriangle ({ text, textC,logoC}){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <polygon points="150,18 244,182 56,182" fill="${logoC}" />
      
    <text x="150" y="130" dominant-baseline="middle" text-anchor="middle" fill="${textC}" font-size="48">${text}</text>  
    
    </svg>`
};

module.exports = {generateLogo};
module.exports = {shapesCircle};
module.exports = {shapesSquare};
module.exports = {shapesTriangle};