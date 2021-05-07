var Webflow = Webflow || [];
Webflow.push(function () {

    if ($('#survey').length > 0) {
        $('form :input').on('change input', function () {
            $(window).bind('beforeunload', function () {
                return 'Are you sure you want to leave?';
            });
        });
    }

});
