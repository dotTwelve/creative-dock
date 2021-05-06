var Webflow = Webflow || [];
Webflow.push(function () {

    new AWF.MSF({
        hiddeButtonsOnSubmit: true,
        scrollTopOnStepChange: true,
        nextSelector: '#next',
        formSelector: '#wf-form-Survey',
        nextText: [
            {
                step: '1',
                text: 'Continue'
            },
            {
                step: '2',
                text: 'Continue'
            },
            {
                step: '3',
                text: 'Continue'
            }
        ],
        backSelector: '#back',
        warningClass: 'warning'
    });
    new AWF.Logic({ logicList: [{ conditions: [{ selector: '#Name', operator: 'empty' }], operator: 'and', actions: [{ selector: '#Name', action: 'require', clear: false }] }], submitHiddenInputs: false, checkConditionsOnLoad: false });

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
