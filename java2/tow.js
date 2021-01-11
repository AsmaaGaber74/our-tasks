  /*global add*/
 

 /* function to some tow number*/
 function add()
   {
     "use strict";
       var
            num1 = document.getElementById("enter-num1").value,
            num2 = document.getElementById("enter-num2").value;
       
        if (isNaN(num1))
          {
           
            document.getElementById("result").innerHTML = " the plus of them is: sorry not aaaa number " ;
             alert("foucs on what you write");
         }
        else if (isNaN(num2))
         { 
            document.getElementById("result").innerHTML = "the plus of them is : sorry not a number";
             alert("foucs on what you write");
         }
        else
         {
            var
               value=parseInt(num1)+parseInt(num2);
              document.getElementById("result").innerHTML ="the plus of them is=  " +  value;
         }
  }
 /* function to show prompet*/
 function pro()
       {
          "use strict";
            document.getElementById("show-prompit").innerHTML = prompt("say some thing");
      }
 /* function to show date*/
 function data()
        {
                "use strict";
             var
                  theData = new Date("Jan 10, 2021 4:43:32");
                  document.getElementById("tell-me theData").innerHTML = theData;
 }
 /* function to count letters number in string*/
 function count()
        {
              "use strict";
            var
               x=document.getElementById("enter-leteers").value;
                document.getElementById("number-equal").innerHTML=x.length;
      }
 /* function to chang color*/
  function chang()
         {
         "use strict";
              var
                 x=document.getElementById("showChange"),
                 y=document.getElementById("choseColor").value;
                 x.style.backgroundColor=y;
        }
 /* function to make array*/
 function array()
       {  
             "use strict";
             var
               number = document.getElementById("enter-number").value,    
               namess=[],
               names = ["first name is :", "secound name is : ", "thrid name is:", "fourth name is : ","fifth name is : ", "sixth name is : " ," seventh name is : ", "eight name is : " , "ninth name is : ", "ect" , "nineteenth name is : "  ],
                i,
                m;
           for(i=0; i<number ; i++)
               {
                   if(i>18){break;}
                   var z=i+1;
                   namess[i]=prompt("enter nam number : " + z);
                }    
                  var combin=[];
            for(m=0; m<=number-1; m++)
               {       
                    combin[m]=names[m]+ namess[m]+"<br/>";
               }
             document.getElementById("show").innerHTML=combin.join(" ");   
      }
       
  
   
