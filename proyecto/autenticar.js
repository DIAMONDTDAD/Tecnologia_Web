const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
  

});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

function fechaactual(){
  var fecha =new Date();
   month = fecha.getUTCMonth()+1;
   day = fecha.getUTCDate();
   year = fecha.getUTCFullYear();
   minutes= fecha.getUTCMinutes();
   horas= fecha.getUTCHours()-4;
   seconds= fecha.getUTCSeconds();
  
  imprimirDatos= "Entregado el "+month+"-"+day+"-"+year+" a horas : "+horas+":"+minutes+":"+seconds;
    
  document.getElementById('result').innerHTML=imprimirDatos;
}   