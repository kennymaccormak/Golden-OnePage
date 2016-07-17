$(document).ready(function() {

    $('.btn-hide_menu').click(function() {
        var $hideMenu = $(this);
        console.log('$hideMenu:', $hideMenu);

        if(parseInt($hideMenu.val()) == 0){
            $('.hideMenu').animate({right: "0px"}, 200);
            $('body').animate({right: "200px"}, 200);
            $hideMenu.addClass('btn-show_menu');
            $hideMenu.val(1);
        }
        else {
            $('.hideMenu').animate({right: "-200px"}, 200);
            $('body').animate({right: "0px"}, 200);
            $hideMenu.removeClass('btn-show_menu');
            $hideMenu.val(0);
        }
    });
});

