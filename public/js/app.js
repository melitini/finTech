$(function() {
    //Open panels
    $('.first').click(function(ev) {
        var $second = $('.second-panel');
        // r = parseInt($second.css('right'), 0);
        $second.animate({right: 0}, 1000);
    });
    $('.second').click(function(ev) {
        var $third = $('.third-panel'),
        r = parseInt($third.css('right'), 0);

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








    //     //Open panels
    // $('.first').click(function(ev) {
    //     var $second = $('.second-panel'),
    //     r = parseInt($second.css('right'), 0);

    //     $second.animate({right: '10%'}, 1000);
    // });
    // $('.second').click(function(ev) {
    //     var $third = $('.third-panel'),
    //     r = parseInt($third.css('right'), 0);

    //     $third.animate({right: '5%'}, 1000);
    // });


    // //Close panels
    // $(".second-panel").on("click", ".close-panel", function(e) {
    //     var $second = $('.second-panel');
    //     $second.animate({right: '-150%'}, 1000)
    // });
    // $(".third-panel").on("click", ".close-panel", function(e) {
    //     var $third = $('.third-panel');
    //     $third.animate({right: '-150%'}, 1000)
    // });
});
