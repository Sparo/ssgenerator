(function ($) {
    "use strict";

    jQuery(document).ready(function () {
        if ($().isotope && ($('.ct-portfolio').length > 0)) {

            var $container = $('.ct-portfolio'), // object that will keep track of options
                isotopeOptions = {}, // defaults, used if not explicitly set in hash
                defaultOptions = {
                    filter: '*', itemSelector: '.ct-portfolio-item', // set columnWidth to a percentage of container width
                    masonry: {
                    },
                    transformsEnabled: false
                };
            // set up Isotope
            $container.isotope(defaultOptions);

            $container.imagesLoaded().progress(function (instance, image) {
                if (!image.isLoaded) {
                    return;
                }

                var p = $(image.img).closest('.hidden');
                p.removeClass('hidden');
                $container.addClass('is-loaded');

                $container.isotope('layout');
            });

            $('.ct-portfolio-filters a').on("click", function () {
                $('.ct-portfolio-filters .active').removeClass('active');
                $(this).addClass('active');

                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector, animationOptions: {
                        duration: 750, easing: 'linear', queue: false
                    }
                });
                return false;
            });
        }
    });
}(jQuery));
