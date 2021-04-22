
 

   $(function() {
   'use strict';
   $('.portfolio ul li').on('click', function(){
      $(this).addClass('active').siblings().removeClass('active');
       if($(this).data('class')=== 'all'){
         $('.shuffle-imgs .col-md').hide();
       }
       
                            
   });
});
  