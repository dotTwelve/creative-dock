var Webflow = Webflow || [];
Webflow.push(function () {

    if ($('#survey').length > 0) {
        $('form :input').on('change input', function () {
            $(window).bind('beforeunload', function () {
                return 'Are you sure you want to leave?';
            });
        });
    }

    new AWF.MSF({
        hiddeButtonsOnSubmit: true,
        scrollTopOnStepChange: false,
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
        warningClass: 'warning',
        currentStepSelector: '#current-step'
    });
    new AWF.Logic({ logicList: [{ conditions: [{ selector: '#Name', operator: 'empty' }], operator: 'and', actions: [{ selector: '#Name', action: 'require', clear: false }] }], submitHiddenInputs: false, checkConditionsOnLoad: false });

    var backButton = $('#back').hide();
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


    $(".w-slider-dot.w-active").attrchange({
        trackValues: true,
        callback: function (event) {
            if (event.attributeName === "tabindex") {
                /*$button.removeClass(function (index, css) {
                    return (css.match(/(^|\s)step-\S+/g) || []).join(' ');
                });*/

                index = $(".w-slider-dot.w-active").index();
                /*var className = "step-" + index;
                $button.addClass(className);*/
                $("html, body").animate({ scrollTop: 0 }, "slow");

                $(".form-nav-bullets-bullet").removeClass("active");    
                var currentBullet = $(".form-nav-bullets-bullet");
                $(currentBullet[index]).addClass("active");

                var backButton = $("#back");

                if (index > 0) {
                    backButton.show();
                } else {
                    backButton.hide();
                }

            }
        }
    });

});
