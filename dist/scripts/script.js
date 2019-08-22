$(document).ready(function () {

    $('.submit').click(function (e) {
        e.preventDefault();
        var parent = $(this).parents('.form');
        var errors = [];
        var requireList = parent.find('.require');

        requireList.each(function () {
            var value = $(this).val();
            if(!value){
                errors.push($(this).attr('data-error'));
            }
        });

        if(errors.length != 0){
            var message = "<span class='error-icon' uk-icon='icon: ban; ratio: 2'></span><p class='error-message'>Заполните обязательные поля:";
            errors.forEach(function (elem) {
                message = message + ' ' + elem;
            });
            message += "</p>";

            UIkit.notification(message);
            errors.length = 0;
            console.log(errors);
        }
    });

});