var Webflow = Webflow || [];
Webflow.push(function () {
  
    $("#orders-slider").slider({
        value: 200,
        min: 1,
        max: 1000,
        step: 1,
        slide: function (event, ui) {
            $("#orders-slider-input").val(ui.value);
        }
    });
    $("#orders-slider-input").val($("#orders-slider").slider("value"));

    $("#picks-slider").slider({
        value: 5,
        min: 1,
        max: 12,
        step: 1,
        slide: function (event, ui) {
            $("#picks-slider-input").val(ui.value);
        }
    });
    $("#picks-slider-input").val($("#picks-slider").slider("value"));

});
