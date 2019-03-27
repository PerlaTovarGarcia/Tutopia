
   let directry = "./images/";
//Establecer variables para indicar la ruta a la carpeta incluye imágenes.
   let list = [];
//indica la ruta completa a las imágenes, incluido su nombre de archivo.



          for(let i=0 ; i < 10; i++) {
              list[i] = directry + i + ".png";
//let list = "directorio a carpeta" + "uno de los números (i)" + "extensión (png)" .
            new  Image().src = list[i];
//Crear imagen de la cual src es la lista [i].
  }


//variale para hacer un contador.
let counter = 0;

    function slot(){
        let Random = setInterval(function(){
// Comienza a generar números al azar. En este caso, el proceso de generación se muestra antes de que se haya decidido el número.
              counter++;
//Contador para contar el proceso de generación de tiempos.
              let left = Math.floor(Math.random() * 10);
              let center = Math.floor(Math.random() * 10);
              let right = Math.floor(Math.random() * 10);
 // El número se genera en punto decimal, de modo que el número debe multiplicarse por 10. Luego, el número se redondeará a entero por "piso".
              document.left.src = list[left];
              document.center.src = list[center];
              document.right.src = list[right];
//Mostrar los números durante el proceso de generación de números.


              if (counter > 5){
                 let final_left = list[left];
                 let final_center = list[center];
                 let final_right = list[right];
// Mostrar cinco números durante el proceso de generación en 10 mm / seg.



                     counter = 0;
                     clearInterval(Random);
// Después de que se muestre el resultado, se debe cerrar el proceso de generación de números aleatorios

              }
       }, //Fin de la función setInterval.

        100);
}   // fin de  function slot
