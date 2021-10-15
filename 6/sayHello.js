// let sayHello = 'Hola a todos'
// let age = 30

// export default sayHello

function sayHello (name) {
  console.log(`Hola ${name}`);
}

function age (age) {
  console.log(age);
}

let info = {
  name: 'Daniel',
  age: 30,
  location: 'COL'
}

export {
  sayHello,
  age,
  info
}

// export {
//   sayHello,
//   age
// }