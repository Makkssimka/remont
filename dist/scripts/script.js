$(document).ready(function () {

    //обработка форм
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

    //вызов модального окна
    $('.modal-open').click(function (e) {
        e.preventDefault();
        var name = $(this).text();
        var modal = $(this).attr('data-modal');
        var desc = "";

        switch(modal) {
            case '1':
                desc = "Заполните форму и в течение 15 минут с вами свяжется специалист и согласует время замера" ;
                break;
            case '2':
                desc = "Заполните форму и в течение 15 минут с вами свяжется специалист, и расскажет подробнее о дизайне" ;
                break;
            case '3':
                desc = "Заполните форму и в течение 15 минут с вами свяжется специалист, и расскажет о ремонте" ;
                break;
            case '4':
                desc = "Заполните форму и в течение 15 минут с вами свяжется специалист и расскажет подробнее о косметическом ремонте";
                break;
            case '5':
                desc = "Заполните форму и в течение 15 минут с вами свяжется специалист и расскажет подробнее о евроремонте";
                break;
            case '6':
                desc = "Заполните форму и в течение 15 минут с вами свяжется специалист и расскажет подробнее о ремонте по дизайн-проекту";
                break;
        }

        $('#optionModal .button').text(name);
        $('#optionModal .uk-modal-title').text(desc);

        UIkit.modal('#optionModal').show();
    });

    //Галлерея комментариев
    $(".comments-carousel").owlCarousel({
        margin: 10,
        nav: true,
        navText: [
            '<span uk-icon="icon: chevron-left; ratio: 2"></span>',
            '<span uk-icon="icon: chevron-right; ratio: 2"></span>'
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    //Галлереи портфолио
    $(".portfolio-carousel").owlCarousel({
        margin: 10,
        nav: true,
        navText: [
            '<span uk-icon="icon: chevron-left; ratio: 2"></span>',
            '<span uk-icon="icon: chevron-right; ratio: 2"></span>'
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


});