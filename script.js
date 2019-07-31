$(document).ready(function(){
  $("#name").keyup(function(){
    var add = $("#name").val();
    $("span").html(add);
  });
});
