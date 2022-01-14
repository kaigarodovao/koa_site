$("body").on('click', '[href*="#"]', function (e) {
    const headerHeight = $('header').height();
    $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - headerHeight}, 1000);
    e.preventDefault();
});

$(window).on("scroll", function () {
    const scrolled = $(this).scrollTop();
    if (scrolled > 0) {
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }
});

$(document).ready(function () {
    // header autotype
    const autoTypedStrings = [
        'Front-end/Full-Stack <br/>Application Development',
        'Back-end <br/>Application Development',
        'Mobile <br/> Application Development',
        'Database Development',
        'System Integration',
        // 'Data warehouses and NoSQL solutions',
        // 'QA Automation/Manual testing',
        'QA Testing',
        'DevOps/Application <br/>maintenance/CI/DI',
    ];
    const options = {
        strings: autoTypedStrings,
        typeSpeed: 30, // скорость набора
        backSpeed: 15, // скорость удаления текста
        startDelay: 500, // изначальная задержка перед набором
        backDelay: 2000, // пауза перед удалением текста
        loop: true, // повтор (true или false)
        loopCount: false, // число повтором, false = бесконечно
        showCursor: false,
        attr: null, // атрибут
        callback: function () {
        } // функция, которая вызовется после окончания работы плагина
    };
    const typed = new Typed("#autoTyped", options);
    typed.start();

    // slider
    $(".industriesMenuSlider").slick({
        draggable: true,
        swipeToSlide: true,
        // slidesToShow: 6,
        // slidesToScroll: 2,
        variableWidth: true,
        prevArrow: '<button type="button" class="industriesMenuSliderButton slick-prev"></button>',
        nextArrow: '<button type="button" class="industriesMenuSliderButton slick-next"></button>',
        // focusOnSelect: true,
        // centerMode: true,
    });
});

function toggleMenu() {
    const menuContent = $(".ham-menu-content");
    menuContent.toggleClass('active');
}

function selectIndustry(clickedElem) {
    const industryId = $(clickedElem).data("indElement");

    $(".industriesMenuElement").each((index, item) => {
        const industryMenuElem = $(item);
        const elemData = industryMenuElem.data("indElement");
        if (elemData === industryId) {
            industryMenuElem.addClass('selected');
        } else {
            industryMenuElem.removeClass('selected');
        }
    });
    // handle sync add/remove class
    $(".industriesElement").each((index, item) => {
        const industryElem = $(item);
        const elemId = industryElem.attr("id");
        if (elemId !== industryId) {
            industryElem.hide();
        } else {
            industryElem.show();
        }
    });
}
