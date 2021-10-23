//TIPOS DE VARIABLES
// let - var- const
// Var --> Me indica un contexto global
// let - const --> Contexto local

if (true) {
  var name = 'Daniel'
  let lastName = 'Duque'
}
console.log(name);
// console.log(lastName);

//TIPOS DE VALORES
// PRIMITIVOS --> null, bool, String, undefined, number
// ESTRUCURALES --> funciones, arrays, objetos (JSON), XML <nombre>

let num1 = 30 // Primitiva
let nums = [2, 3, 4, 5, 3] // Estructural

// DOS FORMAS DE CREAR FUNCIONES (Retornan o no retornan)
function sayHello () {
  console.log('Hola Sabado');
}

let number = function showNumber () {
  return 3
}

// let number = showNumber()
console.log(number());
sayHello()

let numA = 4
let numB = 25
let names = [
  {
    name: 'Aleja'
  },
  {
    name: 'Gus'
  },
  {
    name: 'Rafa'
  }
]
let ages = [23, 45, 78, 100]

function suma (a, aa, list) {
  console.log(a, aa, list[0].name);
}

suma(numA, numB, names)
console.log(ages[4]);

function showArray (arrayList) {
  for (let i = 0; i < arrayList.length; i++) {
    // if (arrayList[i] < 50) {
    //   console.log(arrayList[i]); 
    // }
    console.log(arrayList[i]); 
  }
}

showArray(ages)

ages.push(50)
console.log(ages);

ages.unshift(10)
console.log(ages);

ages.pop()
console.log(ages);

ages.shift()
console.log(ages);

ages.splice(0)
console.log(ages);

let country = 'Colombia tierra querida'
let divideString = country.split(' ')
// country.split(',')
console.log(divideString);
console.log(divideString.join('.'));

//FILTER - MAP
let music = ['Rock', 'Balada', 'Metal', 'Norteño', 'Cumbia', 'Pop', 'Salsa', 'Tango', 'Vals', 'Balada']
let numeros = [3, 67, 465, 847, 8034, 74, 8]

// let musicFilter = music.filter((value, index, array) => {
//   return value === 'Rock'
// })

// let numerosFilter = numeros.filter((value, index, array) => {
//   return value % 2 === 0
// })

// let sqrt = numeros.map((value, index, array) => {
//   return Math.sqrt(value)
// })

// console.log(musicFilter);
// console.log(numerosFilter);
// console.log(sqrt);

//Reduce, ForEach

// MODULOS

// import sqrt from './utils.js'
import { sqrt, filterBy} from './utils.js'

let sqrtLocal = sqrt(numeros)
let filterByBaladaLocal = filterBy(music, 'genero')
let filterByParLocal = filterBy(numeros, 'par')
console.log(sqrtLocal, filterByBaladaLocal, filterByParLocal);
// console.log(filterByBaladaLocal);
// console.log(filterByParLocal);

