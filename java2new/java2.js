//q1
 var
               // way1
   element= new Array();
    element[0]="200 " + '<br />';
    element[1]="ahmed "+ '<br />';
    element[2]="Hi  "+ '<br />';
    element[3]=true + '<br />';
    element[4]=false + '<br />';
    element[5]="m  "+ '<br />';
    element[6]="Css "+ '<br />';
    element[7]= "Hi "+ '<br />';
    document.getElementById("way1").innerHTML = element.join(" ") ;
                          // way2
    var
        elementt= new Array("200 "+ '<br />', "Ahmed "+ '<br />', "Hi " + '<br />', true + '<br />', false+ '<br />', "M" + '<br />', "Css" + '<br />', "Hi"+ '<br />');
        document.getElementById("way2").innerHTML = elementt.join(" ") ;
                        // way3
   var
     elementtt = [];
            elementtt[0]="200"+ '<br />' ;
            elementtt[1]="ahmed" + '<br />';
            elementtt[2]="Hi " + '<br />';
            elementtt[3]=true + '<br />';
            elementtt[4]=false+ '<br />';
            elementtt[5]="m " + '<br />';
            elementtt[6]="Css " + '<br />';
            elementtt[7]= "Hi " + '<br />';
            document.getElementById("way3").innerHTML = elementtt.join(" ") ;
                   // way4
   var
     elementttt =
     [
        "200 "+ '<br />',
        "Ahmed "+ '<br />',
        "Hi "+ '<br />',
        true + '<br />',
        false + '<br />',
        "M "+ '<br />',
        "Css"+ '<br />',
        "Hi "+ '<br />',
      ];
     document.getElementById("way4").innerHTML = elementttt.join(" ") ;
     //q2
             // way1
      if (Array. isArray(element))
            {
              console.log("yes,this is  array");
            }
      else
        {
             console.log("no,this is not array");
        }
           //way2
    if (element.constructor===  Array)
       {
          console.log("yes,this is  array");
        }
     else
        {
             console.log("no,this is not array");
        }
       //q3
            console.log(element.length);
        //q4
         document.getElementById("index7").innerHTML = "last index is "+ element[7] + "</br> "+ element.join(" ");
         //q4
         document.getElementById("index0").innerHTML = "first index is "+ element[0] + "</br> "+ element.join(" ");
         //q6
         element=element.toString();
                console.log(element); 
         //q7
                 elementt.pop();
                 elementt.shift();
                 elementt.splice(2,2);
                 document.getElementById("remov").innerHTML =elementt.join(" ");
            //q8
            elementt.splice(2,1,"Three" + '<br />');
            elementt.unshift("One" + '<br />' );
            elementt.push("Last" + '<br />');
            
            document.getElementById("add").innerHTML =elementt.join(" ");
            //q9
            elementt.sort();
             document.getElementById("sort").innerHTML =elementt.join(" ");
            //q10
               elementt.reverse();
               document.getElementById("reverse").innerHTML =elementt.join(" ");
               //q11
               var listOne=
               [
                "one"+ '<br />',
                "tow"+ '<br />',
                "three"+ '<br />',
               ];
               var listTow=
               [
                "four"+ '<br />',
                "five"+ '<br />',
                "six"+ '<br />',
               ];
               compinList=listOne.concat(listTow);
               document.getElementById("combin").innerHTML =compinList.join(" ");
               
               