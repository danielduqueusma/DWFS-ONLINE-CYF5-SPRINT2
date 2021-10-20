/*
Contrato para el gameObject:

let gameObject = {
  stats : {
    carisma: 20,
    fuerza: 20,
    belleza: 20,
    inteligencia: 20
  },
  items : {
    linternas: 0,
    estacas: 0,
    tijeras: 0,
    globos: 0,
    espejo: false
  },
}
*/

// afecta fuerza
export function zombie(gameObject) {
  console.log("%c La heroina se efrenta a Zombie...", 'background-color: purple; color: white; font-size: 20px; padding: 10px');
  if (gameObject.items.estaca > 0) {
    setTimeout(() => {
      console.log("%c La heroina tiene " + gameObject.items.estaca + " estacas y atacará a Zombie...", 'background-color: green; color: white; font-size: 20px; padding: 10px');
      gameObject.items.estaca --
    }, 1000);
    setTimeout(() => {
      console.log("%c Estacas restantes: " + gameObject.items.estaca, 'background-color: blue; color: white; font-size: 20px; padding: 10px');
    }, 1500);
    setTimeout(() => {
      gameObject.stats.fuerza = gameObject.stats.fuerza + 5
      console.log("%c Zombie ha sido eliminado y nuestra heroina aumenta 5 en fuerza ", 'background-color: black; color: white; font-size: 20px; padding: 10px');
      console.log("%c Fuerza total: " + gameObject.stats.fuerza, 'background-color: black; color: white; font-size: 20px; padding: 10px');
    }, 2000);
  } else {
    if (gameObject.stats.fuerza <= 0) {
      setTimeout(() => {
        console.log("%c La heroina tiene " + gameObject.items.estaca + " estacas y será atacada por Zombie...", 'background-color: red; color: white; font-size: 20px; padding: 10px');
        gameObject.stats.inteligencia = gameObject.stats.inteligencia - 2
        gameObject.stats.carisma = gameObject.stats.carisma - 2
        gameObject.stats.belleza = gameObject.stats.belleza - 2
      }, 1000);
      setTimeout(() => {
        console.log("%c La heroina disminuyo todos sus atributos en 2 ", 'background-color: red; color: white; font-size: 20px; padding: 10px');
      }, 1500);
    } else {
      setTimeout(() => {
        console.log("%c La heroina tiene " + gameObject.items.estaca + " estacas y será atacada por Zombie...", 'background-color: red; color: white; font-size: 20px; padding: 10px');
        gameObject.stats.fuerza = gameObject.stats.fuerza - 10
      }, 1000);
      setTimeout(() => {
        console.log("%c Fuerza total: " + gameObject.stats.fuerza, 'background-color: black; color: white; font-size: 20px; padding: 10px');
      }, 1500);
    }
  }

  return gameObject
  /*
    - zombie puede ser eliminado si se usa una estaca en su contra.
    - Se obtiene +5 en fuerza si zombie es eliminado.
    - Si se usa una estaca, recuerda actualizar el inventario.
    - Si no se tiene una estaca, zombie atacara, lo cual disminuira la fuerza en -10
    - Si zombie ataca y la fuerza es igual o menor a 0, restar -2 en todos los atributos restantes

    Imprimir cada accion en la consola:
    - Si zombie ataca. 
    - Si zombie fue eliminado usando una estaca.
    - Cantidad de estacas restantes
    
     La función retorna un game object actualizado (stats e inventario)
  */
}

export function obtenerEstaca(gameObject) {
  const probability = Math.floor(Math.random() * 10)
  if (gameObject.stats.fuerza <= 5) {
    if (probability > 2) {
      gameObject.items.estaca ++;
      setTimeout(() => {
        console.log("%c Nuestra heroina ha obtenido una estaca ", 'background-color: yellow; color: black; font-size: 20px; padding: 10px');
        console.log("%c Estacas total: " + gameObject.items.estaca, 'background-color: green; color: white; font-size: 20px; padding: 10px');
      }, 1000);
    } else {
      setTimeout(() => {
        console.log("%c El cofre no tenía nada en su interior ", 'background-color: red; color: white; font-size: 20px; padding: 10px');
      }, 1000);
    }
  } else {
    if (probability > 2) {
      setTimeout(() => {
        console.log("%c El cofre no tenía nada en su interior ", 'background-color: red; color: white; font-size: 20px; padding: 10px');
      }, 1000);
    } else {
      gameObject.items.estaca ++;
      setTimeout(() => {
        console.log("%c Nuestra heroina ha obtenido una estaca ", 'background-color: yellow; color: black; font-size: 20px; padding: 10px');
        console.log("%c Estacas total: " + gameObject.items.estaca, 'background-color: green; color: white; font-size: 20px; padding: 10px');
      }, 1000);
    }
  }

  return gameObject
  /*
    - Este item se obtiene sobre una relacion del valor de fuerza.
    - Si el valor de fuerza de la heroina es menor o igual 5: 80% probabilidad de sumar 1 estaca, 20% de no obtener nada.
    - La condicion es inversa si fuerza es mayor a 5
    - De obtener un item, actualizar el inventario en el gameObject
    - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.
    
    ¿Como calcular la probabilidad?
    - Generar un número random entre 1 y 10
    - El 80% de probabilidad se considera cierto si el número random es mayor a 2. 
    - El 20% de probabilidad se considera cierto si el número random esta entre 1 y 2 inclusive.
    
      La función obtenerGlobo retorna un game object actualizado (stats e inventario)
  */
}