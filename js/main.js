$(document).ready(function() {

    // toggle map visibility
    $("#toggle-map").click(function(){
        $(".target-map").toggle('left');
    });
    // toggle contact form visibility
    $("#toggle-form").click(function(){
        $(".target-form").toggle('left');
    });

    // hide one on click 
    $(document).on("click", "#toggle-map", function(event){
            $(".target-form").hide();
            event.preventDefault();
            if ( $(this).hasClass("isDown") ) {
                $(".left-part").stop().animate({left:"0px"}, 100);                            
            } else {
                $(".left-part").stop().animate({left:"-245px"}, 100);
            }
            $(this).toggleClass("isDown");
            return false;
    });

    $(document).on("click", "#toggle-form", function(event){
        $(".target-map").hide();
        event.preventDefault();
        if ( $(this).hasClass("isDown") ) {
            $(".left-part").stop().animate({left:"0px"}, 100);                            
        } else {
            $(".left-part").stop().animate({left:"-245px"}, 100);
        }
        $(this).toggleClass("isDown");
        return false;
    });

    // $("button").click( function(event){
    //     event.preventDefault();
    //     if ( $(this).hasClass("isDown") ) {
    //         $(".left-part").stop().animate({marginRight:"-0px"}, 200);                            
    //     } else {
    //         $(".left-part").stop().animate({marginRight:"200px"}, 200);
    //     }
    //     $(this).toggleClass("isDown");
    //     return false;
    // });
    
    // $("button").click(function(){
    //     $(".left-part").animate({left: '-250px'});
    //   }); 

 });

