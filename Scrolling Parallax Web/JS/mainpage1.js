// Initialize Tootlips and Popovers
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
  
  //Navbar Box Shadow on Scroll 
  $(function(){
      var navbar = $('.navbar');
      $(window).scroll(function(){
          if($(window).scrollTop() <= 40){
                 navbar.css('box-shadow', 'none');
          } else {
            navbar.css('box-shadow', '0px 10px 20px rgba(0, 0, 0, 0.4)'); 
          }
      });  
  })