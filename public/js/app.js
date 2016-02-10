$(function() {
    var windowWidth = $( window ).width();
    var open = 0;
    //Open Panel
    $('.first').click(function(ev) {
        if (open == 0) {
            var $second = $('.second-panel');
            if (windowWidth < 767) {
                $second.animate({right: 0}, 1000);
                move();
                open = 1;
            }
            else {
                $second.animate({right: '10%'}, 1000);
                move();
                open = 1;
            }
        }
        $(this).css("background", "#d7d7d7");
    });
    $('.individual-accounts').click(function(ev) {
        var $third = $('.third-panel');
        if (windowWidth < 767) {
            $third.animate({right: 0}, 1000);
        }
        else {
            $third.animate({right: '5%'}, 1000);
        }
    });
    //Close panels
    $(".second-panel").on("click", ".close-panel", function(e) {
        $('.first').css("background", "white");
        var $second = $('.second-panel');
        $second.animate({right: '-150%'}, 1000)
        open = 0;
    });
    $(".third-panel").on("click", ".close-panel", function(e) {
        var $third = $('.third-panel');
        $third.animate({right: '-150%'}, 1000);
        open = 0;
    });
});


function move() {
    var elem = document.getElementById("bar"); 
    var width = 0;
    var id = setInterval(frame, 50);
    function frame() {
        if (width == 70) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}