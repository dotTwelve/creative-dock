var Webflow = Webflow || [];
Webflow.push(function () {

    var currentSlide = 1;
    var name = false;
    var age = false;

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

    $(".w-slider-dot.w-active").attrchange({
        trackValues: true,
        callback: function (event) {
            if (event.attributeName === "tabindex") {

                index = $(".w-slider-dot.w-active").index();
                currentSlide = index + 1;

            }
        }
    });

    $(document).on('keypress', function (e) {
        e.preventDefault();
        if (e.which == 13) {
            console.log(currentSlide);
            //$('#next-'+ currentSlide).trigger('click');
        }
    });



});
