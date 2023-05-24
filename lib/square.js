// class square
class Square {
    constructor() {
        this.text = '';
        this.textC = '';
        this.shapeC = '';
    }

    generateSvgLogo({ text, textC,logoC}) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <rect width="200" height="200" fill="${logoC}" />
      
    <text x="100" y="100" dominant-baseline="middle" text-anchor="middle" fill="${textC}" font-size="48">${text}</text>
      
    </svg>`
}
}

module.exports = Square;

