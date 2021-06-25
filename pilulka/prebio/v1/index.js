var Webflow = Webflow || [];
Webflow.push(function () {

    var currentSlide = 1;
    var step1,
        step2,
        step3,
        step4,
        step5,
        step6,
        step7,
        step8,
        step9,
        step10,
        step11,
        step12,
        step13 = false;


    var height = $('.w-slide:nth-child(' + currentSlide + ')').height();
    $('#w-slider-mask-0').height(height);

    $('#Question-1').on('input', function () {
        if ($(this).val() !== '') {
            $('#next-1').removeClass('disabled');
            step1 = true;
        } else {
            $('#next-1').addClass('disabled');
            step1 = false;
        }
    });

    $('input[name^=Question-2]').on('change', function () {
        $('#next-2').removeClass('disabled');
        step2 = true;
    });

    $('#Question-3').on('input', function () {
        if ($(this).val() !== '') {
            $('#next-3').removeClass('disabled');
            step3 = true;
        } else {
            $('#next-3').addClass('disabled');
            step3 = false;
        }
    });

    $('input[name^=Question-4]').on('change', function () {
        if ($('input[name^=Question-4]:checked').length > 0) {
            $('#next-4').removeClass('disabled');
            step4 = true;
        } else {
            $('#next-4').addClass('disabled');
            step4 = false;
        }
    });

    $('input[name^=Question-5]').on('change', function () {
        $('#next-5').removeClass('disabled');
        step5 = true;
    });

    $('input[name^=Question-6]').on('change', function () {
        $('#next-6').removeClass('disabled');
        step6 = true;
    });

    $('input[name^=Question-7]').on('change', function () {
        $('#next-7').removeClass('disabled');
        step7 = true;
    });

    $('input[name^=Question-8]').on('change', function () {
        $('#next-8').removeClass('disabled');
        step8 = true;
    });

    $('input[name^=Question-9]').on('change', function () {
        if ($('input[name^=Question-9]:checked').length > 0) {
            $('#next-9').removeClass('disabled');
            step9 = true;
        } else {
            $('#next-9').addClass('disabled');
            step9 = false;
        }
    });

    $('input[name^=Question-10]').on('change', function () {
        $('#next-10').removeClass('disabled');
        step10 = true;
    });

    $('input[name^=Question-11]').on('change', function () {
        if ($('input[name^=Question-11]:checked').length > 0) {
            $('#next-11').removeClass('disabled');
            step11 = true;
        } else {
            $('#next-11').addClass('disabled');
            step11 = false;
        }
    });

    $('input[name^=Question-12]').on('change', function () {
        $('#next-12').removeClass('disabled');
        step12 = true;
    });

    $('input[name^=Question-13]').on('change', function () {
        if ($('input[name^=Question-13]:checked').length > 0) {
            $('#next-13').removeClass('disabled');
            step13 = true;
        } else {
            $('#next-13').addClass('disabled');
            step13 = false;
        }
    });


    $('#next-1').click(function (e) {
        if (!step1) {
            $('#Question-1').focus();
            //alert('Jak se jmenujete?');
            return;
        }
        //e.preventDefault();
        $('.w-round div:nth-child(2)').trigger('tap');
    });

    $('#next-2').click(function (e) {
        if (!step2) return;
        //e.preventDefault();
        $('.w-round div:nth-child(3)').trigger('tap');
    });
    $('#prev-2').click(function (e) {
        //e.preventDefault();
        $('.w-round div:nth-child(1)').trigger('tap');
    });

    $('#next-3').click(function (e) {
        if (!step3) {
            $('#Question-3').focus();
            //alert('Kolik je vám let?');
            return;
        }
        //e.preventDefault();
        $('.w-round div:nth-child(4)').trigger('tap');
    });
    $('#prev-3').click(function (e) {
        //e.preventDefault();
        $('.w-round div:nth-child(2)').trigger('tap');
    });

    $('#next-4').click(function (e) {
        if (!step4) return;
        //e.preventDefault();
        $('.w-round div:nth-child(5)').trigger('tap');
    });
    $('#prev-4').click(function (e) {
        //e.preventDefault();
        $('.w-round div:nth-child(3)').trigger('tap');
    });

    $('#next-5').click(function (e) {
        if (!step5) return;
        //e.preventDefault();
        $('.w-round div:nth-child(6)').trigger('tap');
    });
    $('#prev-5').click(function (e) {
        //e.preventDefault();
        $('.w-round div:nth-child(4)').trigger('tap');
    });

    $('#next-6').click(function (e) {
        if (!step6) return;
        //e.preventDefault();
        $('.w-round div:nth-child(7)').trigger('tap');
    });
    $('#prev-6').click(function (e) {
        //e.preventDefault();
        $('.w-round div:nth-child(5)').trigger('tap');
    });

    $('#next-7').click(function (e) {
        //e.preventDefault();
        $('.w-round div:nth-child(8)').trigger('tap');
    });
    $('#prev-7').click(function (e) {
        if (!step7) return;
        //e.preventDefault();
        $('.w-round div:nth-child(6)').trigger('tap');
    });

    $('#next-8').click(function (e) {
        if (!step8) return;
        //e.preventDefault();
        $('.w-round div:nth-child(9)').trigger('tap');
    });
    $('#prev-8').click(function (e) {
        //e.preventDefault();
        $('.w-round div:nth-child(7)').trigger('tap');
    });

    $('#next-9').click(function (e) {
        if (!step9) return;
        //e.preventDefault();
        $('.w-round div:nth-child(10)').trigger('tap');
    });
    $('#prev-9').click(function (e) {
        //e.preventDefault();
        $('.w-round div:nth-child(8)').trigger('tap');
    });

    $('#next-10').click(function (e) {
        if (!step10) return;
        //e.preventDefault();
        $('.w-round div:nth-child(11)').trigger('tap');
    });
    $('#prev-10').click(function (e) {
        //e.preventDefault();
        $('.w-round div:nth-child(9)').trigger('tap');
    });

    $('#next-11').click(function (e) {
        if (!step11) return;
        //e.preventDefault();
        $('.w-round div:nth-child(12)').trigger('tap');
    });
    $('#prev-11').click(function (e) {
        //e.preventDefault();
        $('.w-round div:nth-child(10)').trigger('tap');
    });

    $('#next-12').click(function (e) {
        if (!step12) return;
        //e.preventDefault();
        $('.w-round div:nth-child(13)').trigger('tap');
    });
    $('#prev-12').click(function (e) {
        //e.preventDefault();
        $('.w-round div:nth-child(11)').trigger('tap');
    });

    $('#next-13').click(function (e) {
        if (!step13) return;
        //e.preventDefault();
        $('.w-round div:nth-child(14)').trigger('tap');
    });
    $('#prev-13').click(function (e) {
        //e.preventDefault();
        $('.w-round div:nth-child(12)').trigger('tap');
    });

    $('#next-14').click(function (e) {
        //e.preventDefault();
        $('.w-round div:nth-child(15)').trigger('tap');
    });

    $(".w-slider-dot.w-active").attrchange({
        trackValues: true,
        callback: function (event) {
            if (event.attributeName === "tabindex") {

                index = $(".w-slider-dot.w-active").index();
                currentSlide = index + 1;

                dCurrentSlide = $('.w-slide:nth-child(' + currentSlide + ')');

                $('#w-slider-mask-0').height("auto");
                height = dCurrentSlide.height();
                $('#w-slider-mask-0').height(height);

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
