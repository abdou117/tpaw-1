$(document).ready(function () {
    $( function() {
      $( "#datepicker" ).datepicker();  //pour la mise en place du calendrier
    } );
      $("#valider").click(function (event) {
          event.preventDefault();
          console.log("click");
          var isError = false;
          var divs = $('.champ');
  
          divs.each(function () {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
              // do whatever
              if ($(this).val().length== 0) {
                  $(".modal-title").html("message modal");
                  $(".modal-body").html("veuillez remplir tous les champs svp");
                  isError = true;
                  $('#myModal').modal("show");
              }
  
  
              else if  ($(this).val().length<5){
                  $("h5").html("message modal");
                  $("p").html("tous les champs doivent être supérieurs à 5 caractères");
                  isError = true;
                  $('#myModal').modal("show");
                  
              }
          });
          if (isError == false) {
              $(".modal-title").html("Bienvenue " + " "+$("#nom").val() +" "+$("#prénom").val());
              $(".modal-body").html("vous êtes né(e)s le" + "   "   +$("#datepicker").val() + " <br/> "+"et vous habitez à : "+ $("#adresse").val());
  
              $(".modal-body").append("<img src=' https://maps.googleapis.com/maps/api/staticmap?markers="+ $("#adresse").val() +"&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg '>");   
          
              
              $('#myModal').modal("show");
          } else {
              $('#myModal').modal("show");
          }
  
  
  
  
      });
  
  });
  