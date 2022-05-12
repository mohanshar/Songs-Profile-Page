$(document).ready(function () {

    $('#hm').on("click", function () {
        $('#inf').removeClass('active');
        $('#ab').removeClass('active');
        $('#song').removeClass('active');
        $('#hm').addClass('active');
        $('#home').slideDown();
        $('#about').slideUp();
        $('#info').slideUp();
        $('#song1').slideUp();
    });

    $('#inf').on("click", function () {
        $('#inf').addClass('active');
        $('#ab').removeClass('active');
        $('#song').removeClass('active');
        $('#hm').removeClass('active');
        $('#home').slideUp();
        $('#about').slideUp();
        $('#info').slideDown();
        $('#song1').slideUp();
    });

    $('#ab').on("click", function () {
        $('#inf').removeClass('active');
        $('#ab').addClass('active');
        $('#song').removeClass('active');
        $('#hm').removeClass('active');
        $('#home').slideUp();
        $('#about').slideDown();
        $('#info').slideUp();
        $('#song1').slideUp();
    });

    $('#song').on("click", function () {
        $('#inf').removeClass('active');
        $('#ab').removeClass('active');
        $('#song').addClass('active');
        $('#hm').removeClass('active');
        $('#home').slideUp();
        $('#about').slideUp();
        $('#info').slideUp();
        $('#song1').slideDown();
    });

});

window.addEventListener('load', function () {

    var y = document.getElementById("myAudio1");
    var z = document.getElementById("myAudio");

    y.onended = function () {

        var w = document.getElementById("pause");

        if (y.paused) {
            w.innerHTML = 'Play Music';
        }
        else {
            w.innerHTML = 'Pause Music';
        }
    }

    z.onended = function () {

        var fa = document.querySelector('.fa-play')

        if (z.paused) {
            fa.classList.toggle('fa-pause')
        }
        else {
            fa.classList.toggle('fa-pause')
        }
    }
});

function playPause() {

    var w = document.getElementById("pause");
    var y = document.getElementById("myAudio1");

    var fa = document.querySelector('.fa-pause')
    var z = document.getElementById("myAudio");

    if (y.paused && [w.innerHTML === 'Play Music']) {
        y.play();
        w.innerHTML = 'Pause Music';
        z.pause();
        fa.classList.toggle('fa-pause');
    }

    else {
        y.pause();
        w.innerHTML = 'Play Music';
        fa.classList.toggle('fa-pause');
        z.pause();
    }
}

function myFunction() {

    var fa = document.querySelector('.fa-play');

    var z = document.getElementById("myAudio");
    var w = document.getElementById("pause");
    var y = document.getElementById("myAudio1");

    if (z.paused && [w.innerHTML === 'Pause Music']) {
        z.play();
        y.pause();
        w.innerHTML = 'Play Music';
        fa.classList.toggle('fa-pause');
    }
    else {
        z.pause();
        y.pause();
        w.innerHTML = 'Play Music';
        fa.classList.toggle('fa-pause');
    }
}
