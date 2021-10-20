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

// afecta belleza
export function lazy(gameObject) {
  console.log("%c La heroina se efrenta a Lazy...", 'background-color: purple; color: white; font-size: 20px; padding: 10px');
  if (gameObject.items.tijera > 0) {
    setTimeout(() => {
      console.log("%c La heroina tiene " + gameObject.items.tijera + " tijeras y atacará a Lazy...", 'background-color: green; color: white; font-size: 20px; padding: 10px');
      gameObject.items.tijera --
    }, 1000);
    setTimeout(() => {
      console.log("%c Tijeras restantes: " + gameObject.items.tijera, 'background-color: blue; color: white; font-size: 20px; padding: 10px');
    }, 1500);
    setTimeout(() => {
      gameObject.stats.belleza = gameObject.stats.belleza + 5
      console.log("%c Lazy ha sido eliminada y nuestra heroina aumenta 5 en belleza ", 'background-color: black; color: white; font-size: 20px; padding: 10px');
      console.log("%c Belleza total: " + gameObject.stats.belleza, 'background-color: black; color: white; font-size: 20px; padding: 10px');
    }, 2000);
  } else {
    if (gameObject.stats.belleza <= 0) {
      setTimeout(() => {
        console.log("%c La heroina tiene " + gameObject.items.tijera + " tijeras y será atacada por Lazy...", 'background-color: red; color: white; font-size: 20px; padding: 10px');
        gameObject.stats.carisma = gameObject.stats.carisma - 2
        gameObject.stats.fuerza = gameObject.stats.fuerza - 2
        gameObject.stats.inteligencia = gameObject.stats.inteligencia - 2
      }, 1000);
      setTimeout(() => {
        console.log("%c La heroina disminuyo todos sus atributos en 2 ", 'background-color: red; color: white; font-size: 20px; padding: 10px');
      }, 1500);
    } else {
      setTimeout(() => {
        console.log("%c La heroina tiene " + gameObject.items.tijera + " tijeras y será atacada por Lazy...", 'background-color: red; color: white; font-size: 20px; padding: 10px');
        gameObject.stats.belleza = gameObject.stats.belleza - 10
      }, 1000);
      setTimeout(() => {
        console.log("%c Belleza total: " + gameObject.stats.belleza, 'background-color: black; color: white; font-size: 20px; padding: 10px');
      }, 1500);
    }
  }
  return gameObject
  /*
    - lazy puede ser eliminada si se usa una tijera en su contra.
    - Se obtiene +5 en belleza si lazy es eliminado.
    - Si se usa una tijera, recuerda actualizar el inventario.
    - Si no se tiene una tijera, lazy atacara, lo cual disminuira la belleza en -10
    - Si lazy ataca y la belleza es igual o menor a 0, restar -2 en todos los atributos restantes

    Imprimir cada accion en la consola:
    - Si lazy ataca. 
    - Si lazy fue eliminada usando una tijera.
    - Cantidad de tijeras restantes
    
     La función retorna un game object actualizado (stats e inventario)
  */
}

export function obtenerTijera(gameObject) {
  const probability = Math.floor(Math.random() * 10)
  if (gameObject.stats.belleza <= 5) {
    if (probability > 2) {
      gameObject.items.tijera ++;
      setTimeout(() => {
        console.log("%c Nuestra heroina ha obtenido una tijera ", 'background-color: yellow; color: black; font-size: 20px; padding: 10px');
        console.log("%c Tijeras total: " + gameObject.items.tijera, 'background-color: green; color: white; font-size: 20px; padding: 10px');
      }, 1500);
    } else {
      setTimeout(() => {
        console.log("%c El cofre no tenía nada en su interior ", 'background-color: red; color: white; font-size: 20px; padding: 10px');
      }, 1500);
    }
  } else {
    if (probability > 2) {
      setTimeout(() => {
        console.log("%c El cofre no tenía nada en su interior ", 'background-color: red; color: white; font-size: 20px; padding: 10px');
      }, 1500);
    } else {
      gameObject.items.tijera ++;
      setTimeout(() => {
        console.log("%c Nuestra heroina ha obtenido una tijera ", 'background-color: yellow; color: black; font-size: 20px; padding: 10px');
        console.log("%c Tijeras total: " + gameObject.items.tijera, 'background-color: green; color: white; font-size: 20px; padding: 10px');
      }, 1500);
    }
  }

  return gameObject
  /*
    - Este item se obtiene sobre una relacion del valor de belleza.
    - Si el valor de belleza de la heroina es menor o igual 5: 80% probabilidad de sumar 1 tijera, 20% de no obtener nada.
    - La condicion es inversa si belleza es mayor a 5
    - De obtener un item, actualizar el inventario en el gameObject
    - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.
    
    ¿Como calcular la probabilidad?
    - Generar un número random entre 1 y 10
    - El 80% de probabilidad se considera cierto si el número random es mayor a 2. 
    - El 20% de probabilidad se considera cierto si el número random esta entre 1 y 2 inclusive.
    
      La función obtenerTijera retorna un game object actualizado (stats e inventario)
  */
}