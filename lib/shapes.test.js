const { generateLogo } = require('./shapes');

test('generateLogo should generate a circle logo, with a blue fill', () => {
    const logo = generateLogo({
      text: 'Cir',
      textC: 'red',
      shape: 'circle',
      logoC: 'blue'
    });
  
    expect(logo).toContain('<circle cx="150" cy="100" r="80" fill="blue" />');

  });
  
test('generateLogo should generate a square logo, with a blue fill', () => {
    // Write a test case for the square shape
    const logo = generateLogo({
      text: 'Squ',
      textC: 'red',
      shape: 'square',
      logoC: 'blue'
      });

    expect(logo).toContain('<rect width="200" height="200" fill="blue" />');

  });
  
  test('generateLogo should generate a triangle logo, with a blue fill', () => {
    // Write a test case for the triangle shape
    const logo = generateLogo({
      text: 'Tri',
      textC: 'red',
      shape: 'triangle',
      logoC: 'blue'
      });

    expect(logo).toContain(' <polygon points="150,18 244,182 56,182" fill="blue" />');
    
  });
  