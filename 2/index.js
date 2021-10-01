//CONTEXT - SCOPE
let name = 'Daniel'
const DNI = 1223243343


//SCOPE LOCAL
if (true) {
  let lastName = 'Duque'
  console.log(lastName);
  console.log(name);
}

//SCOPE GLOBAL
console.log(name);
// console.log(lastName); ERROR

//FUNCIONES

// function sayHello () {
//   console.log(`Hola Aleja`);
// }

// function sayHello (name) {
//   console.log(`Hola ${name}`);
// }

// sayHello('Saraí');
// sayHello('Axel');
// sayHello('Daniel');
// sayHello('Rafa');
// sayHello('Omar');
// sayHello('Aleja');

function multiplicacion (num1, num2) {
  let result = num1 * num2;
  // console.log(num1 * num2);
  console.log(result);
}

multiplicacion(2, 2)
multiplicacion(2, 2)
multiplicacion(3, 4)
multiplicacion(4, 5)
multiplicacion(5, 10)

let numA = 5;
let numB = 7;
let numC = 8;

function promedio (a, b, c) {
  let average = (a + b + c) / 3
  console.log(average);
}

promedio(numA, numB, numC)
promedio(4, 4, 4)

// RETURN

function suma (x, y) {
  let result = x + y;
  return result
}

let adicion = 10 + suma(3, 7)
console.log(`La suma con la adición es de: ${adicion}`);

// Crear función escandalotron, que reciba 3 params.
// Si la suma de los 3 num es mayor a a 0 y menor a diez. pero , imprimir RRUIDO BAJO
// Si la suma de los 3 num es mayor o igual 10 y menor a 20, imprimir RRUIDO Medio
// Si la suma de los 3 num es mayor o igual a 20 imprimir RRUIDO ALTO


// Retorna la palabra 'Ruido Bajo/Medio/Alto'
// Por fuera, Imprimir `El ruido del usuario es` + ese return

