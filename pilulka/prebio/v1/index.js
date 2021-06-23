var Webflow = Webflow || [];
Webflow.push(function () {

    $('#step-0').click(function (e) {
        e.preventDefault();
        $('.w-round:nth-child(1)').trigger('tap');
    });

    $(".w-slider-dot.w-active").attrchange({
        trackValues: true,
        callback: function (event) {
            if (event.attributeName === "tabindex") {

                index = $(".w-slider-dot.w-active").index();

                $(".counter-bullets-bullet").removeClass("active");
                var currentBullet = $(".counter-bullets-bullet");
                $(currentBullet[index]).addClass("active");

            }
        }
    });

});
