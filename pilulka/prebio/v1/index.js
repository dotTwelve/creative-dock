var Webflow = Webflow || [];
Webflow.push(function () {

    var currentSlide = 1;
    var name = false;
    var age = false;

    var height = $('.w-slide:nth-child(' + currentSlide + ')').height();
    $('#w-slider-mask-0').height(height);

    $('#Question-1').on('input', function () {
        if ($(this).val() !== '') {
            $('#next-1').removeClass('disabled');
            name = true;
        } else {
            $('#next-1').addClass('disabled');
            name = false;
        }
    });

    $('#Question-3').on('input', function () {
        if ($(this).val() !== '') {
            $('#next-3').removeClass('disabled');
            age = true;
        } else {
            $('#next-3').addClass('disabled');
            age = false;
        }
    });

    function next() {

    }

    $('#next-1').click(function (e) {
        if (!name) {
            $('#Question-1').focus();
            alert('Jak se jmenujete?');
            return;
        }
        e.preventDefault();
        $('.w-round div:nth-child(2)').trigger('tap');
    });
    $('#next-2').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(3)').trigger('tap');
    });
    $('#prev-2').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(1)').trigger('tap');
    });
    $('#next-3').click(function (e) {
        if (!age) {
            $('#Question-3').focus();
            alert('Kolik je vám let?');
            return;
        }
        e.preventDefault();
        $('.w-round div:nth-child(4)').trigger('tap');
    });
    $('#prev-3').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(2)').trigger('tap');
    });
    $('#next-4').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(5)').trigger('tap');
    });
    $('#prev-4').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(3)').trigger('tap');
    });
    $('#next-5').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(6)').trigger('tap');
    });
    $('#prev-5').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(4)').trigger('tap');
    });
    $('#next-6').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(7)').trigger('tap');
    });
    $('#prev-6').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(5)').trigger('tap');
    });
    $('#next-7').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(8)').trigger('tap');
    });
    $('#prev-7').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(6)').trigger('tap');
    });

    $('#next-8').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(9)').trigger('tap');
    });
    $('#prev-8').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(7)').trigger('tap');
    });

    $('#next-9').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(10)').trigger('tap');
    });
    $('#prev-9').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(8)').trigger('tap');
    });

    $('#next-10').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(11)').trigger('tap');
    });
    $('#prev-10').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(9)').trigger('tap');
    });

    $('#next-11').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(12)').trigger('tap');
    });
    $('#prev-11').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(10)').trigger('tap');
    });

    $('#next-12').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(13)').trigger('tap');
    });
    $('#prev-12').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(11)').trigger('tap');
    });

    $('#next-13').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(14)').trigger('tap');
    });
    $('#prev-13').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(12)').trigger('tap');
    });

    $('#next-14').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(15)').trigger('tap');
    });

    $(".w-slider-dot.w-active").attrchange({
        trackValues: true,
        callback: function (event) {
            if (event.attributeName === "tabindex") {

                index = $(".w-slider-dot.w-active").index();
                currentSlide = index + 1;

                dCurrentSlide = $('.w-slide:nth-child(' + currentSlide + ')');
                height = dCurrentSlide.height(); 

                $('#w-slider-mask-0').height("auto").height(height);

                if (currentSlide == 14) {
                    $('body').addClass('background');
                } else {
                    $('body').removeClass('background');
                }

                if (currentSlide == 14 || currentSlide == 15) {
                    $('#Footer').removeClass('hidden');
                    $('#FooterInfo').hide();

                } else {
                    $('#Footer').addClass('hidden');
                    $('#FooterInfo').show();
                }

            }
        }
    });

    $('#wf-form-Survey-Form').on("keypress", function (event) {
        var keyPressed = event.keyCode || event.which;
        if (keyPressed === 13) {
            event.preventDefault();
            $('#next-' + currentSlide).trigger('click');
            return false;
        }
    });

});
