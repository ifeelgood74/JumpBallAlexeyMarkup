'use strict';
$(function() {

    // jquery
    /////////////////////////////////////////

    // sticky variant
    // jQuery(window).scroll(function(){
    //     const windowScroll = jQuery(window).scrollTop();
    //     if (windowScroll >= 120) {
    //         jQuery('.b-body__inner').addClass('b-body__sticky');
    //     }
    //     else{
    //         jQuery('.b-body').removeClass('b-body__sticky');
    //     }
    // });

    // Table fix
    //---------------------------------------
    //$(".jsFixTable").tableHeadFixer({"head" : false, "left" : 1});

    // if ( document.querySelectorAll(".jsScrollViewport").length ) {
    //     const scroll1 = new ScrollBooster({
    //         viewport: document.querySelector('.jsScrollViewport'),
    //         content: document.querySelector('.jsScrollContent'),
    //         scrollMode: 'native', // use CSS 'transform' property
    //         direction: 'horizontal', // allow only horizontal scrolling
    //         //emulateScroll: true, // scroll on wheel events
    //     });
    // }

    // if ( document.getElementById("choices-single-1") ) {
    //     const choices1 = new Choices('#choices-single-1',{
    //         loadingText: 'Загрузка...',
    //         noResultsText: 'Ничего не найдено',
    //         noChoicesText: 'Нет вариантов выбора',
    //         itemSelectText: 'Выбрать',
    //         position: 'bottom',
    //     });
    // }
    // new ScrollBooster({
    //     viewport: document.querySelector('.jsScrollViewport'),
    //     content: document.querySelector('.jsScrollContent'),
    //     scrollMode: 'native', // use CSS 'transform' property
    //     direction: 'horizontal', // allow only horizontal scrolling
    //     //emulateScroll: true, // scroll on wheel events
    // });

    // Toggle
    //---------------------------------------
    // $('.js-toggle').on('click', function (){
    //     $(this).next().slideToggle();
    // });

    // b-slide
    $('.b-toggle__btn').on('click', function(e){
        e.preventDefault();
        $(this).next().slideToggle("fast");
        $(this).next().toggleClass('b-toggle__show');
        $(this).toggleClass('b-toggle__show');
    });

    $('.b-toggle-2__btn').on('click', function(e){
        e.preventDefault();
        $(this).next().slideToggle("fast");
        $(this).next().toggleClass('b-toggle-2__show');
        $(this).parent().closest('div').toggleClass('b-toggle-2__show-2');
        $(this).toggleClass('b-toggle-2__show');
    });

    // jBox Modal
    //---------------------------------------
    $('.js-personal-area').jBox('Modal', {
        addClass: 'b-modal-share-wrap',
        content: $('#jsPersonalArea'),
        width: 302,
        overlayClass: 'b-modal-share-overlay',
    });

    // var myModal = $('.js-personal-area').jBox('Modal', {
    //     attach: '.js-personal-area',
    //     closeButton: 'box'
    //     cancelButton: 'выход',
    // });

    //js-authorization

    $('.js-share-1').jBox('Modal', {
        addClass: 'b-modal-share-wrap',
        content: $('#jsShare1'),
        width: 347,
        overlayClass: 'b-modal-share-overlay',
    });

    $('.js-share-2').jBox('Modal', {
        addClass: 'b-modal-share-wrap',
        content: $('#jsShare2'),
        width: 347,
        overlayClass: 'b-modal-share-overlay',
    });

    $('.js-share-3').jBox('Modal', {
        addClass: 'b-modal-share-wrap',
        content: $('#jsShare3'),
        width: 347,
        overlayClass: 'b-modal-share-overlay',
    });

    // jBox Tooltip
    //-------------------------------------------


    // test
    //////////////////////////////////////////////////////////
    // jBox Tooltip
    //-------------------------------------------
    // Use the option closeOnMouseleave to keep it open
    $('.js-size-box-1').jBox('Tooltip', {
        content: $('#jsSizeBox1'),
        closeOnMouseleave: true,
        position: {
            x: 'right',
            y: 'center'
        },
        outside: 'x', // Horizontal Tooltips need to change their outside position
        offset: {x: -55,y: -30},
        maxWidth: 370,
        adjustPosition: true
    });

    // jsShoppingCartDropdown
    //////////////////////////////////////////////////////////
    $('.js-header-shopping-cart').jBox('Tooltip', {
        content: $('#jsShoppingCartDropdown'),
        closeOnMouseleave: true,
        addClass: 'b-shopping-cart-dropdown-wrap',
        pointer: 'right:60',
        minWidth: 438,
        maxWidth: 500,
        adjustPosition: true
    });

    $('.b-publication-img__caption-share--').jBox('Tooltip', {
        content: $('#jsShare'),
        trigger: 'click',
        //closeOnMouseleave: true,
        addClass: 'b-shopping-cart-dropdown-wrap',
        //pointer: 'right:60',
        //minWidth: 438,
        width: 347,
        adjustPosition: true,
        //pointTo: 'target'
        //overlay: true,
        closeOnClick: true,
    });


    // jBox Modal
    //-------------------------------------------
    // jsShoppingCartCheckout
    $('.js-share--').jBox('Modal', {
        addClass: 'b-modal-share-wrap',
        content: $('#jsShare1--'),
        width: 347,
        overlayClass: 'b-modal-share-overlay',
    });

    // js-notice-1
    $('.js-notice-1').jBox('Modal', {
        addClass: 'b-notice-1-wrap',
        content: $('#jsNotice1'),
        overlay: false,
        adjustDistance: {top: 50, right: 15},
        position: {x: 'right', y: 'top'},
        offset: {x: -40, y: 140},
        autoClose: 1000
    });

    // js-header-phone-m
    $('.js-header-phone-m').jBox('Modal', {
        addClass: 'b-header-phone-mobile-wrap',
        overlayClass: 'b-header-phone-mobile-overlay',
        content: $('#jsHeaderPhoneMobile'),
        //overlay: false,
        position: {x: 0, y: 40},
        adjustDistance: {right: 0, left: 0},
        width: 991,
        //position: {x: 'left', y: 'top'},
        //offset: {x: 0, y: 40},
    });

    // Scroll to top
    //-------------------------------------------
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {
            $('.js-totop').fadeIn(200);
        } else {
            $('.js-totop').fadeOut(200);
        }
    });
    $('.js-totop').click(function() {
        $('body,html').animate({
            scrollTop : 0
        }, 500);
    });


    // javascript
    /////////////////////////////////////////

    // OnoffCanvas
    OnoffCanvas.autoinit();

    // sticky
    const sticky = new Sticky('#jsSticky', {});
    sticky.update();

    // select
    //-------------------------------------------
    if ( document.getElementById("choices-single-1") ) {
        const choices1 = new Choices('#choices-single-1',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-2") ) {
        const choices2 = new Choices('#choices-single-2',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-2-2") ) {
        const choices2 = new Choices('#choices-single-2-2',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-3") ) {
        const choices3 = new Choices('#choices-single-3',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-4") ) {
        const choices4 = new Choices('#choices-single-4',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-5") ) {
        const choices5 = new Choices('#choices-single-5',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }

    if ( document.getElementById("choices-single-6") ) {
        const choices6 = new Choices('#choices-single-6',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-7") ) {
        const choices7 = new Choices('#choices-single-7',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-8") ) {
        const choices8 = new Choices('#choices-single-8',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-9") ) {
        const choices9 = new Choices('#choices-single-9',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-10") ) {
        const choices10 = new Choices('#choices-single-10',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }

    if ( document.getElementById("choices-single-11") ) {
        const choices10 = new Choices('#choices-single-11',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-12") ) {
        const choices10 = new Choices('#choices-single-12',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-13") ) {
        const choices10 = new Choices('#choices-single-13',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-14") ) {
        const choices10 = new Choices('#choices-single-14',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }

    if ( document.getElementById("choices-single-15") ) {
        const choices10 = new Choices('#choices-single-15',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-16") ) {
        const choices10 = new Choices('#choices-single-16',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-17") ) {
        const choices10 = new Choices('#choices-single-17',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-18") ) {
        const choices10 = new Choices('#choices-single-18',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }

    if ( document.getElementById("choices-single-19") ) {
        const choices10 = new Choices('#choices-single-19',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-20") ) {
        const choices10 = new Choices('#choices-single-20',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-21") ) {
        const choices10 = new Choices('#choices-single-21',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }

    if ( document.getElementById("choices-single-22") ) {
        const choices10 = new Choices('#choices-single-22',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-23") ) {
        const choices10 = new Choices('#choices-single-23',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-24") ) {
        const choices10 = new Choices('#choices-single-24',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }

    if ( document.getElementById("choices-single-25") ) {
        const choices10 = new Choices('#choices-single-25',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-26") ) {
        const choices10 = new Choices('#choices-single-26',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-27") ) {
        const choices10 = new Choices('#choices-single-27',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-28") ) {
        const choices10 = new Choices('#choices-single-28',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }

    // player
    if ( document.getElementById("choices-single-29") ) {
        const choices10 = new Choices('#choices-single-29',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-30") ) {
        const choices10 = new Choices('#choices-single-30',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-31") ) {
        const choices10 = new Choices('#choices-single-31',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-32") ) {
        const choices10 = new Choices('#choices-single-32',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }

    // school
    if ( document.getElementById("choices-single-33") ) {
        const choices10 = new Choices('#choices-single-33',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-34") ) {
        const choices10 = new Choices('#choices-single-34',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-35") ) {
        const choices10 = new Choices('#choices-single-35',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-36") ) {
        const choices10 = new Choices('#choices-single-36',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-37") ) {
        const choices10 = new Choices('#choices-single-37',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-38") ) {
        const choices10 = new Choices('#choices-single-38',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-39") ) {
        const choices10 = new Choices('#choices-single-39',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }
    if ( document.getElementById("choices-single-40") ) {
        const choices10 = new Choices('#choices-single-10',{
            loadingText: 'Загрузка...',
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет вариантов выбора',
            itemSelectText: 'Выбрать',
            position: 'bottom',
        });
    }

    // slider
    //-------------------------------------------
    if ( document.getElementById("js-slider-1") ) {
        new Splide( '#js-slider-1', {
            perPage: 1,
            perMove: 1,
            height: '960px',
            cover: true,
            rewind: true,
            breakpoints: {
                // 640: {
                //     perPage: 2,
                // },
                1199.98: {
                    height: '730px',
                },
                991.98: {
                    height: '440px',
                },
                575.98: {
                    height: '350px',

                },
            }
        } ).mount();
    }

    if ( document.getElementById("js-slider-2") ) {
        new Splide( '#js-slider-2', {
            type   : 'loop',
            perPage: 6,
            perMove: 1,
            pagination: false,
            gap: '20px',
            //fixedHeight: '200px',
            breakpoints: {
                // 1199.98: {
                //     height: '730px',
                // },
                991.98: {
                    gap: '10px',
                },
                767.98: {
                    perPage: 4,
                    gap: '10px',
                },
                575.98: {
                    perPage: 3,
                    gap: '10px',
                },
            }
        } ).mount();
    }

    if ( document.getElementById("js-slider-3") ) {
        new Splide( '#js-slider-3', {
            type   : 'loop',
            perPage: 4,
            perMove: 1,
            pagination: false,
            //rewind: true,
            gap: '5px',
            breakpoints: {
                // 1199.98: {
                //     height: '730px',
                // },
                // 991.98: {
                //     perPage: 3,
                //     gap: '10px',
                // },
                767.98: {
                    perPage: 3,
                    //gap: '10px',
                },
                575.98: {
                    perPage: 2,
                    //gap: '10px',
                },
            }
        } ).mount();
    }

    if ( document.getElementById("js-slider-4") ) {
        new Splide( '#js-slider-4', {
            type   : 'loop',
            perPage: 4,
            perMove: 1,
            pagination: false,
            //rewind: true,
            gap: '20px',
            breakpoints: {
                1199.98: {
                    perPage: 3,
                    gap: '10px',
                },
                991.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',

                },
            }
        } ).mount();
    }
    if ( document.getElementById("js-slider-4-2") ) {
        new Splide( '#js-slider-4-2', {
            type   : 'loop',
            perPage: 4,
            perMove: 1,
            pagination: false,
            //rewind: true,
            gap: '20px',
            breakpoints: {
                1199.98: {
                    perPage: 3,
                    gap: '10px',
                },
                991.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',

                },
            }
        } ).mount();
    }
    if ( document.getElementById("js-slider-4-3") ) {
        new Splide( '#js-slider-4-3', {
            type   : 'loop',
            perPage: 3,
            perMove: 1,
            pagination: false,
            //rewind: true,
            gap: '20px',
            breakpoints: {
                // 1349.98: {
                //     perPage: 2,
                //     gap: '10px',
                // },
                1199.98: {
                    perPage: 2,
                    gap: '10px',
                },
                991.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',

                },
            }
        } ).mount();
    }
    if ( document.getElementById("js-slider-4-4") ) {
        new Splide( '#js-slider-4-4', {
            type   : 'loop',
            perPage: 3,
            perMove: 1,
            pagination: false,
            //rewind: true,
            gap: '20px',
            breakpoints: {
                1199.98: {
                    perPage: 2,
                    gap: '10px',
                },
                991.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',

                },
            }
        } ).mount();
    }
    if ( document.getElementById("js-slider-4-5") ) {
        new Splide( '#js-slider-4-5', {
            type   : 'loop',
            perPage: 3,
            perMove: 1,
            pagination: false,
            //rewind: true,
            gap: '20px',
            breakpoints: {
                1199.98: {
                    perPage: 2,
                    gap: '10px',
                },
                991.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',

                },
            }
        } ).mount();
    }
    if ( document.getElementById("js-slider-4-6") ) {
        new Splide( '#js-slider-4-6', {
            type   : 'loop',
            perPage: 3,
            perMove: 1,
            pagination: false,
            //rewind: true,
            gap: '20px',
            breakpoints: {
                1199.98: {
                    perPage: 2,
                    gap: '10px',
                },
                991.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',

                },
            }
        } ).mount();
    }
    if ( document.getElementById("js-slider-4-7") ) {
        new Splide( '#js-slider-4-7', {
            type   : 'loop',
            perPage: 3,
            perMove: 1,
            pagination: false,
            //rewind: true,
            gap: '20px',
            breakpoints: {
                1199.98: {
                    perPage: 2,
                    gap: '10px',
                },
                991.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',

                },
            }
        } ).mount();
    }

    if ( document.getElementById("js-slider-5") ) {
        new Splide( '#js-slider-5', {
            type   : 'loop',
            perPage: 6,
            perMove: 1,
            pagination: false,
            //fixedHeight: '200px',
            gap: '20px',
            breakpoints: {
                1349.98: {
                    perPage: 5,
                    gap: '10px',
                },
                1199.98: {
                    perPage: 4,
                    gap: '10px',
                },
                991.98: {
                    perPage: 3,
                    gap: '10px',
                },
                767.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',
                },
            }
        } ).mount();
    }
    if ( document.getElementById("js-slider-5-2") ) {
        new Splide( '#js-slider-5-2', {
            type   : 'loop',
            perPage: 6,
            perMove: 1,
            pagination: false,
            //fixedHeight: '200px',
            gap: '20px',
            breakpoints: {
                1349.98: {
                    perPage: 5,
                    gap: '10px',
                },
                1199.98: {
                    perPage: 4,
                    gap: '10px',
                },
                991.98: {
                    perPage: 3,
                    gap: '10px',
                },
                767.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',
                },
            }
        } ).mount();
    }
    if ( document.getElementById("js-slider-5-3") ) {
        new Splide( '#js-slider-5-3', {
            type   : 'loop',
            perPage: 6,
            perMove: 1,
            pagination: false,
            //fixedHeight: '200px',
            gap: '20px',
            breakpoints: {
                1349.98: {
                    perPage: 5,
                    gap: '10px',
                },
                1199.98: {
                    perPage: 4,
                    gap: '10px',
                },
                991.98: {
                    perPage: 3,
                    gap: '10px',
                },
                767.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',
                },
            }
        } ).mount();
    }

    if ( document.getElementById("js-slider-6") ) {
        new Splide( '#js-slider-6', {
            type   : 'loop',
            perPage: 3,
            perMove: 1,
            pagination: false,
            //fixedHeight: '200px',
            gap: '20px',
        } ).mount();
    }
    if ( document.getElementById("js-slider-6-2") ) {
        new Splide( '#js-slider-6-2', {
            type   : 'loop',
            perPage: 3,
            perMove: 1,
            pagination: false,
            //fixedHeight: '200px',
            gap: '20px',
        } ).mount();
    }

    if ( document.getElementById("js-slider-7") ) {
        new Splide( '#js-slider-7', {
            type   : 'loop',
            perPage: 4,
            perMove: 1,
            pagination: false,
            //fixedHeight: '200px',
            gap: '20px',
            breakpoints: {
                1199.98: {
                    perPage: 3,
                    gap: '10px',
                },
                991.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',

                },
            }
        } ).mount();
    }
    if ( document.getElementById("js-slider-7-2") ) {
        new Splide( '#js-slider-7-2', {
            type   : 'loop',
            perPage: 4,
            perMove: 1,
            pagination: false,
            //fixedHeight: '200px',
            gap: '20px',
            breakpoints: {
                1199.98: {
                    perPage: 3,
                    gap: '10px',
                },
                991.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',

                },
            }
        } ).mount();
    }
    if ( document.getElementById("js-slider-7-3") ) {
        new Splide( '#js-slider-7-3', {
            type   : 'loop',
            perPage: 4,
            perMove: 1,
            pagination: false,
            //fixedHeight: '200px',
            gap: '20px',
            breakpoints: {
                1199.98: {
                    perPage: 3,
                    gap: '10px',
                },
                991.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',

                },
            }
        } ).mount();
    }
    if ( document.getElementById("js-slider-7-4") ) {
        new Splide( '#js-slider-7-4', {
            type   : 'loop',
            perPage: 4,
            perMove: 1,
            pagination: false,
            //fixedHeight: '200px',
            gap: '20px',
            breakpoints: {
                1199.98: {
                    perPage: 3,
                    gap: '10px',
                },
                991.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',

                },
            }
        } ).mount();
    }

    if ( document.getElementById("js-slider-8") ) {
        new Splide( '#js-slider-8', {
            type   : 'loop',
            perPage: 6,
            perMove: 1,
            pagination: false,
            //fixedHeight: '200px',
            gap: '20px',
            breakpoints: {
                1349.98: {
                    perPage: 5,
                    gap: '10px',
                },
                1199.98: {
                    perPage: 4,
                    gap: '10px',
                },
                991.98: {
                    perPage: 3,
                    gap: '10px',
                },
                767.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',
                },
            }
        } ).mount();
    }
    if ( document.getElementById("js-slider-8-2") ) {
        new Splide( '#js-slider-8-2', {
            type   : 'loop',
            perPage: 6,
            perMove: 1,
            pagination: false,
            //fixedHeight: '200px',
            gap: '20px',
            breakpoints: {
                1349.98: {
                    perPage: 5,
                    gap: '10px',
                },
                1199.98: {
                    perPage: 4,
                    gap: '10px',
                },
                991.98: {
                    perPage: 3,
                    gap: '10px',
                },
                767.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',
                },
            }
        } ).mount();
    }
    if ( document.getElementById("js-slider-8-3") ) {
        new Splide( '#js-slider-8-3', {
            type   : 'loop',
            perPage: 6,
            perMove: 1,
            pagination: false,
            //fixedHeight: '200px',
            gap: '20px',
            breakpoints: {
                1349.98: {
                    perPage: 5,
                    gap: '10px',
                },
                1199.98: {
                    perPage: 4,
                    gap: '10px',
                },
                991.98: {
                    perPage: 3,
                    gap: '10px',
                },
                767.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',
                },
            }
        } ).mount();
    }
    if ( document.getElementById("js-slider-8-4") ) {
        new Splide( '#js-slider-8-4', {
            type: 'slide',
            focus: 'center',
            perPage: 6,
            perMove: 1,
            pagination: false,
            //fixedHeight: '200px',
            gap: '20px',
            breakpoints: {
                1349.98: {
                    perPage: 5,
                    gap: '10px',
                },
                1199.98: {
                    perPage: 4,
                    gap: '10px',
                },
                991.98: {
                    perPage: 3,
                    gap: '10px',
                },
                767.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 1,
                    gap: '10px',
                },
            }
        } ).mount();
    }

    if ( document.getElementById("js-slider-9") ) {
        new Splide( '#js-slider-9', {
            type   : 'loop',
            perPage: 4,
            perMove: 1,
            pagination: false,
            //fixedHeight: '200px',
            gap: '20px',
            breakpoints: {
                1349.98: {
                    perPage: 4,
                    gap: '10px',
                },
                1199.98: {
                    perPage: 3,
                    gap: '10px',
                },
                991.98: {
                    perPage: 3,
                    gap: '10px',
                },
                767.98: {
                    perPage: 2,
                    gap: '10px',
                },
                575.98: {
                    perPage: 2,
                    gap: '10px',
                },
            }
        } ).mount();
    }

    if ( document.getElementById("js-slider-10") ) {
        new Splide( '#js-slider-10', {
            type   : 'loop',
            perPage: 6,
            perMove: 1,
            pagination: false,
            //fixedHeight: '200px',
            gap: '20px',
            breakpoints: {
                // 1199.98: {
                //     height: '730px',
                // },
                991.98: {
                    perPage: 5,
                    gap: '10px',
                },
                767.98: {
                    perPage: 4,
                    gap: '10px',
                },
                575.98: {
                    perPage: 2,
                    gap: '10px',
                },
            }
        } ).mount();
    }

    // if ( document.getElementById("js-slider-vertical-1") ) {
    //     new Splide( '#js-slider-vertical-1', {
    //         //type   : 'loop',
    //         direction: 'ttb',
    //         height: '1030px',
    //         gap: '10px',
    //         perPage: 4,
    //         perMove: 1,
    //         pagination: false,
    //         rewind: true,
    //     } ).mount();
    // }

    if ( document.getElementById("js-slider-vertical-2") ) {
        new Splide( '#js-slider-vertical-2', {
            //type   : 'loop',
            direction: 'ttb',
            height: '560px',
            gap: '20px',
            perPage: 4,
            perMove: 1,
            pagination: false,
            rewind: true,
        } ).mount();
    }

    if ( document.getElementById("js-slider-vertical-3") ) {
        new Splide( '#js-slider-vertical-3', {
            //type   : 'loop',
            direction: 'ttb',
            height: '1180px',
            gap: '10px',
            perPage: 7,
            perMove: 1,
            pagination: false,
            rewind: true,
            breakpoints : {
                991.98: {
                    perPage: 2,
                    height: '330px',
                },
            }
        } ).mount();
    }

    if ( document.getElementById("js-slider-big-secondary") ) {
        // Create and mount the thumbnails slider.
        var secondarySlider = new Splide( '#js-slider-big-secondary', {
            rewind      : true,
            fixedWidth  : 200,
            fixedHeight : 160,
            isNavigation: true,
            gap         : 20,
            focus       : 'center',
            pagination  : false,
            cover       : true,
            arrows     : true,
            breakpoints : {
                991.98: {
                    fixedWidth  : 120,
                    fixedHeight : 100,
                    gap         : 10,
                },
                767.98: {
                    fixedWidth  : 100,
                    fixedHeight : 80,
                    gap         : 10,
                },
            }
        } ).mount();

        // Create the main slider.
        var primarySlider = new Splide( '#js-slider-big-primary', {
            type       : 'fade',
            //heightRatio: 0.5,
            pagination : false,
            //arrows     : false,
            cover      : true,
        } );

        // Set the thumbnails slider as a sync target and then call mount.
        primarySlider.sync( secondarySlider ).mount();
    }

    // calendar
    //-------------------------------------------
    flatpickr.localize(flatpickr.l10ns.ru);
    const fp = flatpickr("#js-calendar-1", {
        inline: true,
        monthSelectorType: "static",
        nextArrow: '<span class="b-calendar__next"></span>',
        prevArrow: '<span class="b-calendar__prev"></span>',
        //mode: "multiple",
        //dateFormat: "Y-m-d",
        //defaultDate: ["2020-10-15", "2020-10-25"]
    });
    const fp2 = flatpickr("#js-calendar-2", {
        inline: true,
        monthSelectorType: "static",
        nextArrow: '<span class="b-calendar-2__next"></span>',
        prevArrow: '<span class="b-calendar-2__prev"></span>',
    });


    // Chart 3 bar
    //-------------------------------------------
    if ( document.getElementById("myChartBar1") ) {
        const myChartBar1 = new Chart(document.getElementById('myChartBar1'), {
            type: 'bar',
            data: {
                labels: [
                    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'
                ],
                datasets: [{
                    label: 'очки',
                    data: [
                        33, 24, 12, 17, 9, 20, 11, 22, 14, 17,
                        22, 11, 20, 22, 18, 26, 13, 4, 22, 16
                    ],
                    backgroundColor: [
                        // 'rgba(255, 99, 132, 0.2)',
                        'rgba(20, 110, 180, 0.95)'
                    ],
                    borderColor: [
                        // 'rgba(255, 99, 132, 1)',
                        'rgba(20, 110, 180, 1)'
                    ],
                    color: '#202A25',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        min: 0,
                        max: 40
                    }
                },
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: false,
                        //text: 'Custom Chart Title'
                    },
                    legend: {
                        display: false,
                        // labels: {
                        //     color: 'rgb(255, 99, 132)'
                        // }
                    },
                    tooltip: {
                        enabled: true,
                    },
                }
            }
        });
    }


    // Chart 3 doughnut
    //-------------------------------------------
    if ( document.getElementById("jsChart1") ) {
        const myChart1 = new Chart(document.getElementById('jsChart1'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [56.6, 43.4 ],
                    backgroundColor: [
                        '#CC0202',
                        '#146EB4',
                    ],
                    borderColor: [
                        '#CC0202',
                        '#146EB4',
                    ],
                    borderWidth: [
                        6,
                        1,
                    ],
                    hoverBorderWidth: [
                        6,
                        1,
                    ],
                    rotation: -90,
                }],
                labels: [
                    '',
                    ''
                ],
            },
            options: {
                cutout: 130,
                plugins: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                }
            }
        });
    }
    if ( document.getElementById("jsChart2") ) {
        const myChart2 = new Chart(document.getElementById('jsChart2'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [38.2, 61.8],
                    backgroundColor: [
                        '#CC0202',
                        '#146EB4',
                    ],
                    borderColor: [
                        '#CC0202',
                        '#146EB4',
                    ],
                    borderWidth: [
                        6,
                        1,
                    ],
                    hoverBorderWidth: [
                        6,
                        1,
                    ],
                    rotation: -90,
                }],
                labels: [
                    '',
                    ''
                ],
            },
            options: {
                cutout: 130,
                plugins: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                }
            }
        });
    }
    if ( document.getElementById("jsChart3") ) {
        const myChart3 = new Chart(document.getElementById('jsChart3'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [76.8, 23.2],
                    backgroundColor: [
                        '#CC0202',
                        '#146EB4',
                    ],
                    borderColor: [
                        '#CC0202',
                        '#146EB4',
                    ],
                    borderWidth: [
                        6,
                        1,
                    ],
                    hoverBorderWidth: [
                        6,
                        1,
                    ],
                    rotation: -90,
                }],
                labels: [
                    '',
                    ''
                ],
            },
            options: {
                cutout: 130,
                plugins: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                }
            }
        });
    }

    if ( document.getElementById("jsChart4") ) {
        const myChart4 = new Chart(document.getElementById('jsChart4'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [56.6, 43.4],
                    backgroundColor: [
                        '#CC0202',
                        '#D0E2F0',
                    ],
                    borderColor: [
                        '#CC0202',
                        '#146EB4',
                    ],
                    borderWidth: [
                        4,
                        1,
                    ],
                    hoverBorderWidth: [
                        4,
                        1,
                    ],
                    rotation: -90,
                }],
                labels: [
                    '',
                    ''
                ],
            },
            options: {
                cutout: 60,
                plugins: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                }
            }
        });
    }
    if ( document.getElementById("jsChart5") ) {
        const myChart5 = new Chart(document.getElementById('jsChart5'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [50.0, 50.0],
                    backgroundColor: [
                        '#CC0202',
                        '#D0E2F0',
                    ],
                    borderColor: [
                        '#CC0202',
                        '#146EB4',
                    ],
                    borderWidth: [
                        4,
                        1,
                    ],
                    hoverBorderWidth: [
                        4,
                        1,
                    ],
                    rotation: -90,
                }],
                labels: [
                    '',
                    ''
                ],
            },
            options: {
                cutout: 60,
                plugins: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                }
            }
        });
    }
    if ( document.getElementById("jsChart6") ) {
        const myChart6 = new Chart(document.getElementById('jsChart6'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [68.4, 31.6],
                    backgroundColor: [
                        '#CC0202',
                        '#D0E2F0',
                    ],
                    borderColor: [
                        '#CC0202',
                        '#146EB4',
                    ],
                    borderWidth: [
                        4,
                        1,
                    ],
                    hoverBorderWidth: [
                        4,
                        1,
                    ],
                    rotation: -90,
                }],
                labels: [
                    '',
                    ''
                ],
            },
            options: {
                cutout: 60,
                plugins: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                }
            }
        });
    }

    if ( document.getElementById("jsChart7") ) {
        const myChart7 = new Chart(document.getElementById('jsChart7'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [48.9, 51.2],
                    backgroundColor: [
                        '#146EB4',
                        '#D0E2F0',
                    ],
                    borderColor: [
                        '#146EB4',
                        '#146EB4',
                    ],
                    borderWidth: [
                        4,
                        1,
                    ],
                    hoverBorderWidth: [
                        4,
                        1,
                    ],
                    rotation: -90,
                }],
                labels: [
                    '',
                    ''
                ],
            },
            options: {
                cutout: 60,
                plugins: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                }
            }
        });
    }
    if ( document.getElementById("jsChart8") ) {
        const myChart8 = new Chart(document.getElementById('jsChart8'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [33.3, 66.7],
                    backgroundColor: [
                        '#146EB4',
                        '#D0E2F0',
                    ],
                    borderColor: [
                        '#146EB4',
                        '#146EB4',
                    ],
                    borderWidth: [
                        4,
                        1,
                    ],
                    hoverBorderWidth: [
                        4,
                        1,
                    ],
                    rotation: -90,
                }],
                labels: [
                    '',
                    ''
                ],
            },
            options: {
                cutout: 60,
                plugins: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                }
            }
        });
    }
    if ( document.getElementById("jsChart9") ) {
        const myChart9 = new Chart(document.getElementById('jsChart9'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [80.0, 20.0],
                    backgroundColor: [
                        '#146EB4',
                        '#D0E2F0',
                    ],
                    borderColor: [
                        '#146EB4',
                        '#146EB4',
                    ],
                    borderWidth: [
                        4,
                        1,
                    ],
                    hoverBorderWidth: [
                        4,
                        1,
                    ],
                    rotation: -90,
                }],
                labels: [
                    '',
                    ''
                ],
            },
            options: {
                cutout: 60,
                plugins: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                }
            }
        });
    }


    // Scrollbars
    OverlayScrollbars(document.querySelectorAll('.JsOverlayScrollbars'), {
        // className       : "os-theme-dark",
        // resize          : "both",
        // sizeAutoCapable : true,
        // paddingAbsolute : true,
        // scrollbars : {
        //     clickScrolling : true
        // }
    });

});
