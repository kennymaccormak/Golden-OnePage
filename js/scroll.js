var scrollDown = function(){
    $(".scrollDown").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $('a[name="' + id + '"]').offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
};

$(document).ready(scrollDown);
