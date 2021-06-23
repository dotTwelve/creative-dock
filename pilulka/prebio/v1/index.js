var Webflow = Webflow || [];
Webflow.push(function () {

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
