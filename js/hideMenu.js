var hideShowMenu = function () {

    $('.btn-hide_menu').click(function () {
        var $hideMenu = $(this);

        if(parseInt($hideMenu.val()) == 0){
            $('.hideMenu').animate({right: "0px"}, 200);
            $hideMenu.animate({right: "200px"}, 200);
            $hideMenu.addClass('btn-show_menu');
            $hideMenu.val(1);
        }
        else {
            $('.hideMenu').animate({right: "-200px"}, 200);
            $hideMenu.animate({right: "0px"}, 200);
            $hideMenu.removeClass('btn-show_menu');
            $hideMenu.val(0);
        }
    });
};


var hideMenu = function () {
        var $hideMenu = $('.btn-hide_menu');

            $('.hideMenu').animate({right: "-200px"}, 200);
            $hideMenu.animate({right: "0px"}, 200);
            $hideMenu.removeClass('btn-show_menu');
            $hideMenu.val(0);


};

$(document).ready(hideShowMenu);
$(document).ready(hideMenu);
