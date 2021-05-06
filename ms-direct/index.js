var Webflow = Webflow || [];
Webflow.push(function () {

    var inputOrder = $('#orders-slider-input');
    var inputPick = $('#picks-slider-input');
    var sliderOrder = $('#orders-slider');
    var sliderPick = $('#picks-slider');

    inputOrder.prop('readonly', true).val(200);
    inputPick.prop('readonly', true).val(5);
  
    sliderOrder.slider({
        range: "min",
        value: 200,
        min: 1,
        max: 1000,
        step: 1,
        slide: function (event, ui) {
            inputOrder.val(ui.value);
        }
    });
    inputOrder.val(sliderOrder.slider("value"));

    sliderPick.slider({
        range: "min",
        value: 5,
        min: 1,
        max: 12,
        step: 1,
        slide: function (event, ui) {
            inputPick.val(ui.value);
        }
    });
    inputPick.val(sliderPick.slider("value"));

});
