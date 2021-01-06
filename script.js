$(document).ready(function(){
  $("#user").keyup(function(){
    $("#logged-user").html($("#user").val());
  });
   $("#pass").keyup(function(){
    $("#logged-pass").html($("#pass").val());
  });
});
