let directry = "./cabeza/";
//Establecer variables para indicar la ruta a la carpeta incluye imágenes.
let list = [];
//indica la ruta completa a las imágenes, incluido su nombre de archivo.
let body= "./cuerpo/";
let listBody= [];

let feet = "./pies/";
let listFeet = [];


let fraseUno = "./fcabeza/";
//Establecer variables para indicar la ruta a la carpeta incluye imágenes.
let listUno = [];
//indica la ruta completa a las imágenes, incluido su nombre de archivo.
let fraseDos= "./fcuerpo/";
let listDos= [];

let fraseTres = "./fpies/";
let listTres = [];


      for(let i=0 ; i < 8; i++) {
          listUno[i] = fraseUno + i + ".png";
//let list = "directorio a carpeta" + "uno de los números (i)" + "extensión (png)" .
        new  Image().src = listUno[i];
//Crear imagen de la cual src es la lista [i].
}

      for(let j=0; j < 8; j++) {
        listDos[j] = fraseDos + j + ".png";
        new Image().src=listDos[j];
      }


      for(let p=0; p < 8; p++) {
        listTres[p] = fraseTres + p + ".png";
        new Image().src=listTres[p];
      }

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

let cabeza=[];
let cuerpo=[];
let pies=[];
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


             cabeza.push(final_up);
             console.log(final_up);
             cuerpo.push(final_center);
             console.log(final_center);
             pies.push(final_down);
             console.log(final_down);
// Mostrar cinco números durante el proceso de generación en 10 mm / seg.




         for(let k=0; k<cabeza.length; k++){

           if(cabeza[k]==='./cabeza/0.png'){
             document.left.src = './fcabeza/0.png';
           }

           if(cabeza[k]==='./cabeza/1.png'){
             document.left.src = './fcabeza/1.png';
           }
           if(cabeza[k]==='./cabeza/2.png'){
             document.left.src = './fcabeza/2.png';
           }
           if(cabeza[k]==='./cabeza/3.png'){
             document.left.src = './fcabeza/3.png';
           }
           if(cabeza[k]==='./cabeza/4.png'){
             document.left.src = './fcabeza/4.png';
           }
           if(cabeza[k]==='./cabeza/5.png'){
             document.left.src = './fcabeza/5.png';
           }
           if(cabeza[k]==='./cabeza/6.png'){
             document.left.src = './fcabeza/6.png';
           }
           if(cabeza[k]==='./cabeza/7.png'){
             document.left.src = './fcabeza/7.png';
           }
         }

         for(let q=0; q<cuerpo.length; q++){

           if(cuerpo[q]==='./cuerpo/0.png'){
             document.centerFrase.src = './fcuerpo/0.png';
           }

           if(cuerpo[q]==='./cuerpo/1.png'){
             document.centerFrase.src = './fcuerpo/1.png';
           }
           if(cuerpo[q]==='./cuerpo/2.png'){
             document.centerFrase.src = './fcuerpo/2.png';
           }
           if(cuerpo[q]==='./cuerpo/3.png'){
             document.centerFrase.src = './fcuerpo/3.png';
           }
           if(cuerpo[q]==='./cuerpo/4.png'){
             document.centerFrase.src = './fcuerpo/4.png';
           }
           if(cuerpo[q]==='./cuerpo/5.png'){
             document.centerFrase.src = './fcuerpo/5.png';
           }
           if(cuerpo[q]==='./cuerpo/6.png'){
             document.centerFrase.src = './fcuerpo/6.png';
           }
           if(cuerpo[q]==='./cuerpo/7.png'){
             document.centerFrase.src = './fcuerpo/7.png';
           }
         }


         for(let t=0; t<pies.length; t++){

           if(pies[t]==='./pies/0.png'){
             document.right.src = './fpies/0.png';
           }

           if(pies[t]==='./pies/1.png'){
             document.right.src = './fpies/1.png';
           }
           if(pies[t]==='./pies/2.png'){
             document.right.src = './fpies/2.png';
           }
           if(pies[t]==='./pies/3.png'){
             document.right.src = './fpies/3.png';
           }
           if(pies[t]==='./pies/4.png'){
             document.right.src = './fpies/4.png';
           }
           if(cuerpo[t]==='./pies/5.png'){
             document.right.src = './fpies/5.png';
           }
           if(pies[t]==='./pies/6.png'){
             document.right.src = './fpies/6.png';
           }
           if(pies[t]==='./pies/7.png'){
             document.right.src = './fpies/7.png';
           }
         }

                  counter = 0;
                  clearInterval(Random);
// Después de que se muestre el resultado, se debe cerrar el proceso de generación de números aleatorios

           }
    }, //Fin de la función setInterval.

     100);//tamaño de la imagen
}   // fin de  function slot
