//class triangle
class Triangle {
    constructor() {
        this.text = '';
        this.textC = '';
        this.shapeC = '';
    }

    generateSvgLogo ({ text, textC,logoC}){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <polygon points="150,18 244,182 56,182" fill="${logoC}" />
      
    <text x="150" y="130" dominant-baseline="middle" text-anchor="middle" fill="${textC}" font-size="48">${text}</text>  
    
    </svg>`
};
}

module.exports = Triangle;

