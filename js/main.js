$(document).ready(function() {

    // toggle map visibility
    $("#toggle-map").click(function(){
       $(".target-map").slideToggle( '8000');
    });
    // toggle contact form visibility
    $("#toggle-form").click(function(){
        $(".target-form").slideToggle( '8000');
    });

    // hide one on click 
    $(document).on("click", "#toggle-map", function(event){
            $(".target-form").hide();
    });

    $(document).on("click", "#toggle-form", function(event){
        $(".target-map").hide();
});

 });