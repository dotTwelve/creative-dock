var Webflow = Webflow || [];
Webflow.push(function () {

    $('#step-1').click(function (e) {
        e.preventDefault();
        $('.w-round:nth-child(2)').trigger('tap');
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
