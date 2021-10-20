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

// afecta carisma
export function burlon(gameObject) {
  console.log("%c La heroina se efrenta a Burlon...", 'background-color: purple; color: white; font-size: 20px; padding: 10px');
  if (gameObject.items.linterna > 0) {
    setTimeout(() => {
      console.log("%c La heroina tiene " + gameObject.items.linterna + " linternas y atacará a Burlon...", 'background-color: green; color: white; font-size: 20px; padding: 10px');
      gameObject.items.linterna --
    }, 1000);
    setTimeout(() => {
      console.log("%c Linternas restantes: " + gameObject.items.linterna, 'background-color: blue; color: white; font-size: 20px; padding: 10px');
    }, 1500);
    setTimeout(() => {
      gameObject.stats.carisma = gameObject.stats.carisma + 5
      console.log("%c Burlon ha sido eliminado y nuestra heroina aumenta 5 en carisma ", 'background-color: black; color: white; font-size: 20px; padding: 10px');
      console.log("%c Carisma total: " + gameObject.stats.carisma, 'background-color: black; color: white; font-size: 20px; padding: 10px');
    }, 2000);
  } else {
    if (gameObject.stats.carisma <= 0) {
      setTimeout(() => {
        console.log("%c La heroina tiene " + gameObject.items.linterna + " linternas y será atacada por Burlon...", 'background-color: red; color: white; font-size: 20px; padding: 10px');
        gameObject.stats.inteligencia = gameObject.stats.inteligencia - 2
        gameObject.stats.fuerza = gameObject.stats.fuerza - 2
        gameObject.stats.belleza = gameObject.stats.belleza - 2
      }, 1000);
      setTimeout(() => {
        console.log("%c La heroina disminuyo todos sus atributos en 2 ", 'background-color: red; color: white; font-size: 20px; padding: 10px');
      }, 1500);
    } else {
      setTimeout(() => {
        console.log("%c La heroina tiene " + gameObject.items.linterna + " linternas y será atacada por Burlon...", 'background-color: red; color: white; font-size: 20px; padding: 10px');
        gameObject.stats.carisma = gameObject.stats.carisma - 10
      }, 1000);
      setTimeout(() => {
        console.log("%c Carisma total: " + gameObject.stats.carisma, 'background-color: black; color: white; font-size: 20px; padding: 10px');
      }, 1500);
    }
  }

  return gameObject
  /*
    - burlon puede ser eliminado si se usa una linterna en su contra.
    - Se obtiene +5 en carisma si burlon es eliminado.
    - Si se usa una linterna, recuerda actualizar el inventario.
    - Si no se tiene una linterna, burlon atacara, lo cual disminuira la carisma en -10
    - Si burlon ataca y la carisma es igual o menor a 0, restar -2 en todos los atributos restantes

    Imprimir cada accion en la consola:
    - Si burlon ataca. 
    - Si burlon fue eliminado usando una linterna.
    - Cantidad de linternas restantes
    
     La función retorna un game object actualizado (stats e inventario)
  */
}

export function obtenerLinterna(gameObject) {
  const probability = Math.floor(Math.random() * 10)
  if (gameObject.stats.carisma <= 5) {
    if (probability > 2) {
      gameObject.items.linterna ++;
      setTimeout(() => {
        console.log("%c Nuestra heroina ha obtenido una linterna ", 'background-color: yellow; color: black; font-size: 20px; padding: 10px');
        console.log("%c Linternas total: " + gameObject.items.linterna, 'background-color: green; color: white; font-size: 20px; padding: 10px');
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
      gameObject.items.linterna ++;
      setTimeout(() => {
        console.log("%c Nuestra heroina ha obtenido una linterna ", 'background-color: yellow; color: black; font-size: 20px; padding: 10px');
        console.log("%c Linternas total: " + gameObject.items.linterna, 'background-color: green; color: white; font-size: 20px; padding: 10px');
      }, 1000);
    }
  }

  return gameObject
  /*
    - Este item se obtiene sobre una relacion del valor de carisma.
    - Si el valor de carisma de la heroina es menor o igual 5: 80% probabilidad de sumar 1 linterna, 20% de no obtener nada.
    - La condicion es inversa si carisma es mayor a 5
    - De obtener un item, actualizar el inventario en el gameObject
    - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.
    
    ¿Como calcular la probabilidad?
    - Generar un número random entre 1 y 10
    - El 80% de probabilidad se considera cierto si el número random es mayor a 2. 
    - El 20% de probabilidad se considera cierto si el número random esta entre 1 y 2 inclusive.
    
      La función obtenerLinterna retorna un game object actualizado (stats e inventario)
  */
}