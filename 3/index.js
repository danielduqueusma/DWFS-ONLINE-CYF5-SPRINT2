// Determinar los número pares

for (let i = 0; i < 30; i++) {
  if (i % 2 === 0) {
    console.log(`El número ${i} es par`);
  }
}

function mostrarEdades (edad) {
  for (let i = 1; i <= edad; i++) {
    console.log(i);
  }
}

mostrarEdades(25)
mostrarEdades(30)

let mix = ['Daniel', 'Duque', 30, false, true]
console.log(mix);
// console.log(mix[0]); 
// console.log(mix[2]);
console.log(mix.length);

function printArray (list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

printArray(mix)

let fruits = ['Manzana', 'Naranja', 'Sandía', 'Platano']
console.log(fruits.indexOf('Manzana'));

fruits.push('Mango')
// printArray(fruits)

fruits.unshift('Papaya')
// printArray(fruits)

fruits.shift()
fruits.pop()
// fruits.splice(fruits.indexOf('Sandía'), 2)
printArray(fruits)

