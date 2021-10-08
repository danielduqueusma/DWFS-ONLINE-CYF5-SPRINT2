// let misDatos =  {
//   nombre:  'Daniel',
//   pais: 'Colombia',
//   ciudad: 'Medellín',
//   edad: 30,
//   saludo: function () {
//     console.log(`Mi nombre es ${this.nombre}`);
//   },
//   mostrarEdad: function () {
//     console.log(`Tengo ${this.edad} años`);
//   }
// }

// misDatos.saludo();
// misDatos.mostrarEdad();

//Operaciones con objetos
let albumes = [
  {
    id: '6',
    genero: "dance",
    artista: "Rozes",
    titulo: "Under the Grave",
    lanzamiento: "02-14-2016",
  },
  {
    id: '2',
    genero: "soul",
    artista: "The Weeknd",
    titulo: "Starboy",
    lanzamiento: "11-25-2018",
  },
  {
    id: '3',
    genero: "pop",
    artista: "Sia",
    titulo: "Cheap Thrills",
    lanzamiento: "4-13-2017",
  },
  {
    id: '4',
    genero: "rock",
    artista: "Queen",
    titulo: "The Miracle",
    lanzamiento: "5-22-1989",
  },
  {
    id: '5',
    genero: "pop",
    artista: "Ariana Grande",
    titulo: "Sweetener",
    lanzamiento: "4-13-2017",
  },
  {
    id: '1',
    genero: "pop",
    artista: "NSYNC",
    titulo: "No strings attached",
    lanzamiento: "3-29-2000",
  },
  {
    id: '10',
    genero: "pop",
    artista: "Little Mix",
    titulo: "Confetti",
    lanzamiento: "11-6-2020",
  }
];

console.log(albumes);
// 1. mostrar el primer albúm por consola
// console.log(albumes[0]);

// 2. mostrar el titulo del último albúm por consola
// console.log(albumes[albumes.length - 1].titulo);

// 3. crear un ciclo que muestre todos los albumes de la colección
// for (let i = 0; i < albumes.length; i++) {
//   console.log(albumes[i]);
// }

// 4. crear un ciclo que muestre solo los artistas de la colección
// for (let i = 0; i < albumes.length; i++) {
//   console.log(albumes[i].artista);
// }
// 5. crear un ciclo que muestre solo los titulos de la colección
// for (let i = 0; i < albumes.length; i++) {
//   console.log(albumes[i].titulo);
// }

// 6. crear una función que muestre un albúm por consola, 
//a través de un id (se deberá agregar un id a cada albúm)
// la definición puede ser esta:
function mostrarAlbum(x) {
  let albumEncontrado = false
  for (let i = 0; i < albumes.length; i++) {
    if (albumes[i].id === x) {
      console.log(albumes[i]);
      albumEncontrado = true
      break
    }
  }

  console.log(!albumEncontrado ? `El album con el id ${x} no fue encontrado` : '');

  // if (!albumEncontrado) {
  //   console.log(`El album con el id ${x} no fue encontrado`);
  // }
}

// y la invocación, esta:
mostrarAlbum('10'); 
// mostrar por consola el tercer albúm

// EXTRAS:

// 7. crear una función que agregue un albúm nuevo a la colección

// 8. crear una función que elimine un albúm de la colección, según un id