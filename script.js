$(document).ready(function(){
    
    $("#nom").keyup(function(){
        
        var add = $("#nom").val();
        $("span").html(add);
            
    });
});