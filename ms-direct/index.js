$(function () {

    $("#orders-slider").slider({
        value: 100,
        min: 0,
        max: 500,
        step: 50,
        slide: function (event, ui) {
            $("#orders-slider-input").val("$" + ui.value);
        }
    });
    $("#orders-slider-input").val("$" + $("#orders-slider").slider("value"));

});