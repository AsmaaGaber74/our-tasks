//array to contain images in slider
var slidimg=Array.from(document.querySelectorAll('.Slider img')),
    slidcount=slidimg.length;

var
   slidnum=document.getElementById('slider-number'),
    currentslid=1,
   nextButton=document.getElementById('next'),
   prevButton=document.getElementById('prev');
   nextButton.onclick=nextslid;
   prevButton.onclick=prevslid;
//  creat ul  
var
      myul=document.createElement('ul');
      myul.setAttribute('id','ul-num');
//creat li
   for(var i=1; i<=slidcount; i++ )
       {
           var 
               myli=document.createElement('li'),
               liText=document.createTextNode(i);
               myli.setAttribute('data-index', i );
               myli.appendChild(liText);
               myul.appendChild(myli);
       }
   
  //but ul in span
   var myindicators=document.getElementById('indicators');
       myindicators.appendChild(myul);
//  var to get ul
var
     newul=document.getElementById('ul-num'),
    // put li in array
     newli=Array.from(document.querySelectorAll('#ul-num li'));
   for(var i=0; i<newli.length; i++)
       {
           newli[i].onclick=function()
           {
               currentslid=parseInt(this.getAttribute('data-index'));
                thechecker();
           }
       }
   
    thechecker();
// take action on nextbutton
   function  nextslid()
    {
        if (nextButton.classList.contains('disabled'))
            {
                return false;
            }
        else
           {
              currentslid++;
               thechecker();
           }
        
    }
// take action on prevtbutton
    function  prevslid()
    {
        if (prevButton.classList.contains('disabled'))
            {
                return false;
            }
        else
           {
              currentslid--;
               thechecker();
           }
    }
//make img and li activ
   function thechecker()
    {
         removeactive();
        slidnum.textContent ='slid# ' + (currentslid) + ' of ' + (slidcount);
        slidimg[currentslid -1 ].classList.add('active');
        newul.children[currentslid-1].classList.add('active');
        
        if(currentslid==1)
            {
                prevButton.classList.add('disabled')
            }
        
         else 
             {
                prevButton.classList.remove('disabled')
            }
        
        if(currentslid==slidcount)
            {
                nextButton.classList.add('disabled')
            }
         else 
             {
                nextButton.classList.remove('disabled')
            }
         
      }
// remove active from img and li
  function removeactive()
    {
          slidimg.forEach(function(img)
            {
                          img.classList.remove('active');
             });
 
         newli.forEach(function(li)
            {
                      li.classList.remove('active');
           });


    }