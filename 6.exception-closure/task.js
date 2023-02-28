function parseCount(str) {
  let stringToNumber = Number.parseFloat(str);
  if (isNaN(stringToNumber)) {
    throw new Error('Невалидное значение');
  }
  return stringToNumber;
}

function validateCount(str) {
  try {
    return parseCount(str);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || b + c < a || c + a < b) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  };

  get area() {
    let halfOfPerimeter = 0.5 * this.perimeter;
    let geronArea = Math.sqrt(halfOfPerimeter * (halfOfPerimeter - this.a) * (halfOfPerimeter - this.b) * (halfOfPerimeter - this.c));
    return Number(geronArea.toFixed(3));
  }; 
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b , c);
  } catch (error) {
    return {
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      get area() {
        return 'Ошибка! Треугольник не существует';
      }
    };
  }
}


