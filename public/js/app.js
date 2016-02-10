$(function() {
    //determine width of window
    var windowWidth = $( window ).width();
    //default state
    var open = 0;
    
    //Open Second Panel
    $('.first').click(function(ev) {
        if (open == 0) {
            //select the second panel
            var $second = $('.second-panel');
            //for small devices
            if (windowWidth < 767) {
                //shade selected 
                $(this).css("background", "#d7d7d7");
                //bring panel into view in stacked fashion
                $second.animate({right: 0}, 1000);
                //add animation to progresss bar
                move();
                //change default state to prevent repeated behavior
                open = 1;
            }
            //for large devices
            else {
                $(this).css("background", "#d7d7d7");
                //add margin to panels to create feel of columns
                $second.animate({right: '10%'}, 1000);
                //add animation to progresss bar
                move();
                //change default state to prevent repeated behavior
                open = 1;
            }
        }
        
    });
    // Open Third Panel
    $('.individual-accounts').click(function(ev) {
        //select third panel
        var $third = $('.third-panel');
        //for small devices
        if (windowWidth < 767) {
            //bring panel into view in stacked fashion
            $third.animate({right: 0}, 1000);
        }
        //for large devices
        else {
            //add margin to panels to create feel of columns
            $third.animate({right: '5%'}, 1000);
        }
    });
    //Close panels
    $(".second-panel").on("click", ".close-panel", function(e) {
        //revert to original shaded selector
        $('.first').css("background", "white");
        var $second = $('.second-panel');
        //send panel back off screen
        $second.animate({right: '-120%'}, 1000)
        open = 0;
    });
    $(".third-panel").on("click", ".close-panel", function(e) {
        var $third = $('.third-panel');
        //send panel back off screen
        $third.animate({right: '-120%'}, 1000);
        open = 0;
    });
});

//progress bar animation
function move() {
    //retrieve element
    var elem = document.getElementById("bar"); 
    //initial width
    var width = 0;
    //animation speed
    var id = setInterval(frame, 50);
    function frame() {
        //set max lenght of shading
        if (width == 70) {
            clearInterval(id);
        } else {
            //inscrease width
            width++; 
            //apply width to element
            elem.style.width = width + '%'; 
        }
    }
}