
   let directry = "./images/";
//Establecer variables para indicar la ruta a la carpeta incluye imágenes.
   let list = [];
//indica la ruta completa a las imágenes, incluido su nombre de archivo.
  let body= "./cuerpos/";
  let listBody= [];

  let feet = "./pies/";
  let listFeet = [];


          for(let i=0 ; i < 8; i++) {
              list[i] = directry + i + ".png";
//let list = "directorio a carpeta" + "uno de los números (i)" + "extensión (png)" .
            new  Image().src = list[i];
//Crear imagen de la cual src es la lista [i].
  }

          for(let j=0; j < 8; j++) {
            listBody[j] = body + j + ".png";
            new Image().src=listBody[j];
          }


          for(let p=0; p < 8; p++) {
            listFeet[p] = feet + p + ".png";
            new Image().src=listFeet[p];
          }

//variale para hacer un contador.
let counter = 0;

    function slot(){
        let Random = setInterval(function(){
// Comienza a generar números al azar. En este caso, el proceso de generación se muestra antes de que se haya decidido el número.
              counter++;
//Contador para contar el proceso de generación de tiempos.
              let up = Math.floor(Math.random() * 8);
              let center = Math.floor(Math.random() * 8);
              let down = Math.floor(Math.random() * 8);
 // El número se genera en punto decimal, de modo que el número debe multiplicarse por 10. Luego, el número se redondeará a entero por "piso".
              document.up.src = list[up];
              document.center.src = listBody[center];
              document.down.src = listFeet[down];
//Mostrar los números durante el proceso de generación de números.


              if (counter > 5){
                 let final_up = list[up];
                 let final_center = listBody[center];
                 let final_down = listFeet[down];
// Mostrar cinco números durante el proceso de generación en 10 mm / seg.



                     counter = 0;
                     clearInterval(Random);
// Después de que se muestre el resultado, se debe cerrar el proceso de generación de números aleatorios

              }
       }, //Fin de la función setInterval.

        100);
}   // fin de  function slot
