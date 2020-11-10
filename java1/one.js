function sum(){
    "use strict";
    var  amount1 = document.getElementById("num1").value,
        amount2 = document.getElementById("num2").value;
        parseInt(amount1);
        parseInt(amount2);
    var value=parseInt(amount1)+parseInt(amount2);
        document.getElementById("result").innerHTML = value;}
function sum2(){
    "use strict";
        var   div = document.getElementById("x");
        div.style.width="200px";
        div.style.height="200px";
        var   name = document.getElementById("img1").value;
       // div.innerHTML=name;
      
     if (name=="ahmedfathy")
      {
          div.innerHTML="<img src=image/pic3.jpg style=height:200px;width=400px; border-radius: 100%;>";
      }
     else if (name=="hamdyfathy")
      {
        div.innerHTML="<img src=image/pic4.jpg style=height:200px;width=400px; border-radius: 100%; >";
      }
      
     else
      {
        div.innerHTML= "not found";
      }
  }