var Webflow = Webflow || [];
Webflow.push(function () {

    $('#next-1').click(function (e) {
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
        e.preventDefault();
        $('.w-round div:nth-child(4)').trigger('tap');
    });
    $('#prev-3').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(2)').trigger('tap');
    });

    $(".w-slider-dot.w-active").attrchange({
        trackValues: true,
        callback: function (event) {
            if (event.attributeName === "tabindex") {

                index = $(".w-slider-dot.w-active").index();

            }
        }
    });

});
