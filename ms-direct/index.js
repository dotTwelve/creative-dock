var Webflow = Webflow || [];
Webflow.push(function () {
  
    $("#orders-slider").slider({
        value: 100,
        min: 1,
        max: 1000,
        step: 1,
        slide: function (event, ui) {
            $("#orders-slider-input").val(ui.value);
        }
    });

    $("#orders-slider-input").val($("#orders-slider").slider("value"));

});
