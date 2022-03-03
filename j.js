function grados(){     
    var num =Number(document.getElementById('num').value);
   if (num>=-10 && num<=15){
       document.getElementById('result').value=("Clima Frio");
   }else{
   if (num>=16 && num<=25){
       document.getElementById('result').value=("Clima Templado")
   }else{
   if (num>=26 && num<=40){
       document.getElementById('result').value=("Clima Calor")
   }
       }
       }

}