 function chagePeople(){
      document.getElementById('content').style.display='block';
      document.getElementById('gif').style.display='none';
      document.getElementById('btnInicio').style.display='none';
      document.getElementById('personajes').style.display='none';

   }
document.getElementById('play').addEventListener('click',chagePeople);


/*function passPage1(){
  document.getElementById("CHAMPS").style.display="none";//se hace invisible mi pantalla
  document.getElementById("WELCOME").style.display="block";//muestra el bloque o pantallas
  document.getElementById("moreInfo").style.display="none";
  document.getElementById("videoLol").innerHTML=`<iframe id="playVideo" width="800" height="600" src="https://www.youtube.com/embed/BGtROJeMPeE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

}
document.getElementById("HOME").addEventListener("click", passPage1);*/
