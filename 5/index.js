
// CALLBACK
//SYNC => La app sigue su flujo normal instrucción por instrucción
// ASYNC => La app ejecuta instrucciones async por otro flujo sin interfrir con el flujo principal

// console.log('1');
// console.log('2');
// console.log('3');

// // HACRER ALGO ASYNC 15 seg
// setTimeout(() => {
//   console.log('Prueba de 5 seg');
// }, 5000);

// console.log('4');
// console.log('5');
// console.log('6');

//MAP
let nums = [2, 7, 29, 26]

/**
 * 
 * @description Function to transform an array of numbers in another
 * @param {*} list Array of numbers
 */
function transformNumbers (list) {
  return list.map((value) => {
    return value + value;
  })
}

let transfornNums = transformNumbers(nums)
console.log(transfornNums);

// FILTER
let names = ['Axel', 'Rosario', 'Rafa', 'Alejandra', 'Rosario']
let nums2 = [2, 43, 45, 3, 67, 3, 12, 3, 90, 46]

/**
 * 
 * @description Function to filter an array of elements in another
 * @param {*} list Array of names
 */
function transformElements (list) {
  return list.filter((value) => {
    return value === 'Rosario' || value === 'Axel'
  })
}

function transformElementsNumber (list) {
  return list.filter((value) => {
    return value > 10
  })
}

let filtrNames = transformElements(names)
console.log(filtrNames);

let highThree = transformElementsNumber(nums2)
console.log(highThree);

let namesObject = [
  {
    name: 'Eliza',
    location: 'MX',
    edad: 21
  },
  {
    name: 'Omar',
    location: 'MX',
    edad: 24
  },
  {
    name: 'Saraí',
    location: 'MX',
    edad: 21
  },
  {
    name: 'Dani',
    location: 'CH',
    edad: 23
  },
]

let onlyNames = namesObject.map((value) => {
  return value.name
})
console.log(onlyNames);
