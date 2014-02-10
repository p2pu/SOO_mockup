/*global jQuery, window, document, console, OpenBadges */

var SOO = window.SOO || {};

(function ($, SOO) {
    'use strict';

    var init = function () {
        $(function () {
            $(".p2pu-tab").p2puSlider({
                navbarContainer: '.navbar',
                icon: '.p2pu-tab-icon',
                iconUp: 'fa-chevron-circle-down',
                iconDown: 'fa-chevron-circle-up'
            });

        });
    };



    SOO.Splash = {};
    SOO.Splash.init = init;

}(jQuery, SOO));