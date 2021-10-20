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

export function megastofeles(gameObject) {
  console.log("%c La heroina se efrenta a Megaestofeles...", 'background-color: purple; color: white; font-size: 20px; padding: 10px');
  if (gameObject.items.espejo) {
    setTimeout(() => {
      console.log("%c La heroina tiene un espejo y atacará a Megaestofeles...", 'background-color: green; color: white; font-size: 20px; padding: 10px');
      gameObject.items.espejo = false
    }, 1000);
    setTimeout(() => {
      console.log("%c La heroina ha usado el espejo y ha esquivado el ataque", 'background-color: blue; color: white; font-size: 20px; padding: 10px');
    }, 1500);
  } else {
    setTimeout(() => {
      console.log("%c La heroina no tiene espejo y será atacada por Megaestofeles...", 'background-color: red; color: white; font-size: 20px; padding: 10px');
      gameObject.stats.inteligencia = gameObject.stats.inteligencia - 10
      gameObject.stats.carisma = gameObject.stats.carisma - 10
      gameObject.stats.belleza = gameObject.stats.belleza - 10
      gameObject.stats.fuerza = gameObject.stats.fuerza - 10
    }, 1000);
    setTimeout(() => {
      console.log("%c La heroina disminuyo todos sus atributos en 10 ", 'background-color: red; color: white; font-size: 20px; padding: 10px');
    }, 1500);
  }

  return gameObject
  /*
    - Recibe un objeto con la información del juego (estadísticas de vida e inventario)
    - Megastofeles SIEMPRE ataca
    - El daño de su ataque puede ser esquivado si la heroina posee un espejo
    - Si el ataque es esquivado, el valor de los atributos quedan intactos
    - Si no se tiene el espejo, todos los atributos se reducen en -10
    - Solo se puede tener un espejo activado (espejo: true). El escudo no es acumulativo
    - El espejo al ser usado, se desactiva (espejo: false)

    Imprimir cada accion en la consola:
    - Nombre del boss
    - Si Megastofeles hace daño: un mensaje de ataque
    - Si la heroina usa el espejo: un mensaje de contra ataque
    
    La función retorna un game object actualizado (stats e inventario)
  */
}

export function obtenerEscudo(gameObject) {
  const probability = Math.floor(Math.random() * 10)
  const totalLife = gameObject.stats.fuerza + gameObject.stats.carisma + gameObject.stats.inteligencia +gameObject.stats.belleza
  if (totalLife <= 10) {
    if (probability > 2) {
      gameObject.items.espejo = true;
      setTimeout(() => {
        console.log("%c Nuestra heroina ha obtenido un espejo ", 'background-color: yellow; color: black; font-size: 20px; padding: 10px');
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
      gameObject.items.espejo = true;
      setTimeout(() => {
        console.log("%c Nuestra heroina ha obtenido un espejo ", 'background-color: yellow; color: black; font-size: 20px; padding: 10px');
      }, 1000);
    }
  }

  return gameObject
  /*
    - Este item se obtiene sobre una relacion del valor de la vida total.
    - La vida total es la sumatoria de los 4 atributos de la heroina
    - Si el valor de la vida es menor o igual 10: 80% probabilidad de acivar el escudo, 20% de no obtener nada.
    - La condicion es inversa si inteligencia es mayor a 25
    - De activar el escudo, actualizar el inventario con la propiedad booleana que corresponda
    - Imprimir en consola si el escudo fue obtenido y activado, o si el cofre no tenia nada.
    
    ¿Como calcular la probabilidad?
    - Generar un número random entre 1 y 10
    - El 80% de probabilidad se considera cierto si el número random es mayor a 2. 
    - El 20% de probabilidad se considera cierto si el número random esta entre 1 y 2 inclusive.
    
      La función obtenerEscudo retorna un game object actualizado (stats e inventario)
  */
}