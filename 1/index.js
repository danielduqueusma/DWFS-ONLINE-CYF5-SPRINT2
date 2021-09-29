console.log('CYF-6o5');
console.log('Acamica');

// var nombre = 'Daniel'
// var nombre = 'Alejandra'
let nombreMentor;
// let nombreMentor = "Eliza"
let nombreMento2 = "Daniel"

let nombreMentee = 'Eliza'
const DNI = 12324354465
let fuma = false

console.log(nombreMentee, DNI, fuma);

// PRIMITIVOS
// String number Boolean null undefined

// // ESTRCUTURALES
// Arrays funciones objetos

//OPERADORES ARITMETICOS
let edadA = '25';
let edadD = 30;
let resultado = edadA + edadD
let operacion = 2 + 2 * 4
console.log(operacion);

//OPERADORES LOGICOS
//AND OR NOT
if (edadA >= 25 && edadD <= 30) {
  console.log('Alejandra');
}

if (edadD <= 30 || edadA > 25) {
  console.log('Daniel');
}

if (!edadA) {
  console.log('verdadero');
}

if (edadA == 25) {
  console.log('Alejandra');
}

if (edadA === 25) {
  console.log('Alejandra 1');
}

let name = 'Daniel'
let lastName = 'Duque'
// let fullName = name + ' ' + lastName
let fullName = `${name} ${lastName}`
console.log(fullName);


let num1 = 34
let num2 =54
let num3 = 100

if (num1 > num2 && num1 > num3) {
  console.log(`El número ${num1} es el mayor` );
} else if (num2 > num1 && num2 > num3) {
  console.log(`El número ${num2} es el mayor`);
} else {
  console.log(`El número ${num3} es el mayor`);
}


