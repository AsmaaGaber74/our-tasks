  /*global add*/
 

 /* function1 to make array*/
 function array()
      {
        
                              "use strict";
                           var sum=0;
                          var len=(Number(document.getElementById("enter-number").value));
                          var ar=new Array();
                          
                          for(var i=0;i<len;i++){
                            ar.push(Number(prompt("Enter array elements:"+ar[i])));
                          }
                           alert("array numbers are: "+ar);
                          for(var i=0;i<len;i++){
                            sum+=ar[i];
                          }
                           
                            if(ar.length == 0){
                                            
                                              document.getElementById("show").innerHTML=0;
                                        }
                            else if(sum % 2 ==0)
                                      {
                                        
                                         document.getElementById("show").innerHTML="even"; 
                                      }
                                      else if (isNaN(sum))
                                    {
                                       
                                   document.getElementById("show").innerHTML=0;
                                    }
                                      else if (!empty(sum))
                                    {
                                       
                                   document.getElementById("show").innerHTML=0;
                                    }
                                    
                            else {
                                          document.getElementById("show").innerHTML="odd";
                                }

      }
 /* function22222 to some tow number*/
 function add()
   {
     "use strict";
       var 
            str1= document.getElementById("enter-str1").value,
            str2 = document.getElementById("enter-str2").value,
            as=str1.length,
            bs=str2.length;
       
        if (as==bs)
          {
           
            document.getElementById("result").innerHTML = " true" ;
             
         }
        
        else
         {
          
              document.getElementById("result").innerHTML ="fauls";
         }
  }
  /* function3333333333 to some tow number*/
 function animal()
   {
     "use strict";
       var 
            num1= document.getElementById("enter-num1").value,
            num2 = document.getElementById("enter-num2").value,
            num3 = document.getElementById("enter-num3").value,
            chickens=num1*2,
            cows=num2*4,
             pigs=num3*4,
             sum=parseInt(chickens)+parseInt(cows)+parseInt(pigs);
            document.getElementById("sum-of-lgs").innerHTML =sum;
       
       
  }
  



      /* function444 to make array*/
       function avrag()
      {
        
                              "use strict";
                              
                           var sum=0;
                          var num=(Number(document.getElementById("enter-number-of-houses").value));
                          var arr=new Array();
                          for(var i=0;i<num;i++)
                          {
                            arr.push(Number(prompt("Enter array elements:"+arr[i])));
                          }
                          
                          for(var i=0;i<num;i++)
                          {
                            sum+=arr[i];
                          }
                           //document.getElementById("show-avrag").innerHTML=sum;
                            var avr=[];
                             for(var i=0;i<num;i++)
                          {
                            avr[i]=arr[i]/num;
                          }
                          var combin=[];
                          for(var i=1;i<=num;i++)
                          {
                            combin[i]="avrag years in hous number" +i+ "="+avr[i-1]+"<br/>";
                            document.getElementById("show-avrag").innerHTML=  combin.join(" ")+"<br/>";
                          }           
                          

      }
                         /* function444 to make array*/
       function avrag2()
      {
        
                              "use strict";
                              
                           
                          var
                           num1=(Number(document.getElementById("enter-years").value)),
                           num2=(Number(document.getElementById("enter-number-of-turns").value)),
                           numberOfHouses=num2+1,
                           avrag=num1/numberOfHouses;
                            document.getElementById("houses-number").innerHTML= "numberOfHouses = "+ numberOfHouses;
                            document.getElementById("show-avrag2").innerHTML="avrag = " +avrag;
                            
                          

      }