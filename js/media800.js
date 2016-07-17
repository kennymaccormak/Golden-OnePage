$(window).resize(function() {

        if ($(window).width() <= '783'){
            $('.stuff').addClass('newStuff');
            $('.stuff').removeClass('stuff');
            $('.stuff_foto').addClass('newStuff_foto');
            $('#stuff_left').removeClass('team_left');
            $('#stuff_right').removeClass('team_right');
            $('#stuff_center').removeClass('team_center');
            $('.stuff_foto').removeClass('stuff_foto');
        } else {
            $('.newStuff').addClass('stuff');
            $('.newStuff').removeClass('newStuff');
            $('.newStuff_foto').addClass('stuff_foto');
            $('#stuff_left').addClass('team_left');
            $('#stuff_right').addClass('team_right');
            $('#stuff_center').addClass('team_center');
            $('.stuff_foto').removeClass('newStuff_foto');
        }

});




