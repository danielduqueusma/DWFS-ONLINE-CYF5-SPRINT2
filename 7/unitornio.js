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

// afecta inteligencia
export function unitornio(gameObject) {
  console.log("%c La heroina se efrenta a Unitornio...", 'background-color: purple; color: white; font-size: 20px; padding: 10px');
  if (gameObject.items.globo > 0) {
    setTimeout(() => {
      console.log("%c La heroina tiene " + gameObject.items.globo + " globos y atacará a Unitornio...", 'background-color: green; color: white; font-size: 20px; padding: 10px');
      gameObject.items.globo --
    }, 1000);
    setTimeout(() => {
      console.log("%c Globos restantes: " + gameObject.items.globo, 'background-color: blue; color: white; font-size: 20px; padding: 10px');
    }, 1500);
    setTimeout(() => {
      gameObject.stats.inteligencia = gameObject.stats.inteligencia + 5
      console.log("%c Unitornio ha sido eliminado y nuestra heroina aumenta 5 en inteligencia ", 'background-color: black; color: white; font-size: 20px; padding: 10px');
      console.log("%c Inteligencia total: " + gameObject.stats.inteligencia, 'background-color: black; color: white; font-size: 20px; padding: 10px');
    }, 2000);
  } else {
    if (gameObject.stats.inteligencia <= 0) {
      setTimeout(() => {
        console.log("%c La heroina tiene " + gameObject.items.globo + " globos y será atacada por Unitornio...", 'background-color: red; color: white; font-size: 20px; padding: 10px');
        gameObject.stats.carisma = gameObject.stats.carisma - 2
        gameObject.stats.fuerza = gameObject.stats.fuerza - 2
        gameObject.stats.belleza = gameObject.stats.belleza - 2
      }, 1000);
      setTimeout(() => {
        console.log("%c La heroina disminuyo todos sus atributos en 2 ", 'background-color: red; color: white; font-size: 20px; padding: 10px');
      }, 1500);
    } else {
      setTimeout(() => {
        console.log("%c La heroina tiene " + gameObject.items.globo + " globos y será atacada por Unitornio...", 'background-color: red; color: white; font-size: 20px; padding: 10px');
        gameObject.stats.inteligencia = gameObject.stats.inteligencia - 10
      }, 1000);
      setTimeout(() => {
        console.log("%c Inteligencia total: " + gameObject.stats.inteligencia, 'background-color: black; color: white; font-size: 20px; padding: 10px');
      }, 1500);
    }
  }

  return gameObject
  /*
    - unitornio puede ser eliminado si se usa un globo en su contra.
    - Se obtiene +5 en inteligencia si unitornio es eliminado.
    - Si se usa un globo, recuerda actualizar el inventario.
    - Si no se tiene un globo, unitornio atacara, lo cual disminuira la inteligencia en -10
    - Si unitornio ataca y la inteligencia es igual o menor a 0, restar -2 en todos los atributos restantes

    Imprimir cada accion en la consola:
    - Si unitornio ataca. 
    - Si unitornio fue eliminado usando un globo.
    - Cantidad de globos restantes
    
     La función retorna un game object actualizado (stats e inventario)
  */
}

export function obtenerGlobo(gameObject) {
  const probability = Math.floor(Math.random() * 10)
  if (gameObject.stats.inteligencia <= 5) {
    if (probability > 2) {
      gameObject.items.globo ++;
      setTimeout(() => {
        console.log("%c Nuestra heroina ha obtenido un globo ", 'background-color: yellow; color: black; font-size: 20px; padding: 10px');
        console.log("%c Globos total: " + gameObject.items.globo, 'background-color: green; color: white; font-size: 20px; padding: 10px');
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
      gameObject.items.globo ++;
      setTimeout(() => {
        console.log("%c Nuestra heroina ha obtenido un globo ", 'background-color: yellow; color: black; font-size: 20px; padding: 10px');
        console.log("%c Globos total: " + gameObject.items.globo, 'background-color: green; color: white; font-size: 20px; padding: 10px');
      }, 1000);
    }
  }

  return gameObject
  /*
    - Este item se obtiene sobre una relacion del valor de inteligencia.
    - Si el valor de inteligencia de la heroina es menor o igual 5: 80% probabilidad de sumar 1 globo, 20% de no obtener nada.
    - La condicion es inversa si inteligencia es mayor a 5
    - De obtener un item, actualizar el inventario en el gameObject
    - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.
    
    ¿Como calcular la probabilidad?
    - Generar un número random entre 1 y 10
    - El 80% de probabilidad se considera cierto si el número random es mayor a 2. 
    - El 20% de probabilidad se considera cierto si el número random esta entre 1 y 2 inclusive.
    
      La función obtenerGlobo retorna un game object actualizado (stats e inventario)
  */
}