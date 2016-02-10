$(function() {
    //Open panels
    $('.first').click(function(ev) {
        var $second = $('.second-panel');
        $second.animate({right: 0}, 1000);
        move();
    });
    $('.individual-accounts').click(function(ev) {
        var $third = $('.third-panel');
        $third.animate({right: 0}, 1000);
    });
    //Close panels
    $(".second-panel").on("click", ".close-panel", function(e) {
        var $second = $('.second-panel');
        $second.animate({right: '-150%'}, 1000)
    });
    $(".third-panel").on("click", ".close-panel", function(e) {
        var $third = $('.third-panel');
        $third.animate({right: '-150%'}, 1000)
    });
});





function move() {
    var elem = document.getElementById("bar"); 
    var width = 0;
    var id = setInterval(frame, 50);
    function frame() {
        if (width == 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}