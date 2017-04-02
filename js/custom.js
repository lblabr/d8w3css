/**
 * @file
 * Defines Javascript behaviors for the drupal8 w3css theme.
 */
(function($, Drupal) {

  'use strict';
// finds background color of parent
   // var bg = $('#main-navigation').css("background-color");
     //  applies background color to child
   // $('ul.w3-menu-0-main__submenu').css("background-color", bg);

  // add flex position to the main menu at scroll.

  var mainNavigation = document.querySelector("#main-navigation-h");
  // in case the main menu not printed.
  if ($("#main-navigation-h ul.w3-menu-main").length > 0){
  var origOffsetY = mainNavigation.offsetTop;
  }


  function scrollWindow(e) {
    if (window.scrollY >= origOffsetY) {
      mainNavigation.classList.add("w3-fixed");
    } else {
      mainNavigation.classList.remove("w3-fixed");
    }

  }


  // make sure all the divs inside any region are equal height only for medium and large screen.
  // make sure the height is the same for all top regions.
  function mediaSize() {
    if (screen.width >= 993) {
      // add class to the body for large screen
      $("body").removeClass("small-screen medium-screen").addClass("large-screen");
      // make sure all the inside regions have the same height.
      $('.top-region').matchHeight({ property: 'height' });
      $('.bottom-region').matchHeight({ property: 'height' });
      $('.footer-region').matchHeight({ property: 'height' });
     } else if ((screen.width >= 601) && (screen.width >= 992)) {
            // add class to the body for medium screen
      $("body").removeClass("small-screen large-screen").addClass("medium-screen");
            // remove the match height on medium screen.
      $('.top-region').matchHeight({remove: true});
      $('.bottom-region').matchHeight({remove: true});
      $('.footer-region').matchHeight({remove: true});
    }else if (screen.width <= 600) {
      // add class to the body for small screen.
      $("body").removeClass("large-screen medium-screen").addClass("small-screen");
      // remove the match height on small screen.
      $('.top-region').matchHeight({remove: true});
      $('.bottom-region').matchHeight({remove: true});
      $('.footer-region').matchHeight({remove: true});
    }
  }


  Drupal.behaviors.drupal8_w3css_theme = {
    attach: function(context, settings) {
      settings.drupal8_w3css_theme = settings.drupal8_w3css_theme || {};

        mediaSize();
        window.addEventListener("resize", mediaSize);
        document.addEventListener("scroll", scrollWindow);


        $(context)
        .find("#main-navigation-v #close-nav")
        .once("#main-navigation-v #close-nav")
        .on('click', function() {
          document.getElementById("main-navigation-v").style.display = "none";

        });
        $(context)
        .find("#open-nav-inner")
        .once("#open-nav-inner")
        .on('click', function() {
          document.getElementById("main-navigation-v").style.display = "block";

        });

      // on click expand the dropdown menu for small device.
      $(context)
        .find("ul.w3-menu-main li.w3-menu-main__item--expanded > a")
        .once("a")
        .on('click', function() {
          var d = document.getElementById("main-menu-inner");
          if (d.className.indexOf("w3-show") == -1) {
            d.className += " w3-show";
          } else {
            d.className = d.className.replace(" w3-show", "");
          }
          return false;
        });

      // Show the mobile menu on click horizontal.
      $(context)
        .find(".mobile-nav")
        .once(".mobile-nav")
        .on('click', function() {
          var x = document.getElementById("main-menu");
          if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
          } else {
            x.className = x.className.replace(" w3-show", "");
          }
        });

      // Change the sumbmenu color as the main menu .
     var footerFormBg = $('#footer-menu').css("background-color");
      $(context)
        .find("#footer-menu form")
        .once("#footer-menu form")
        .css("background-color", footerFormBg);

      // Change the form color to match the footer color .
     var subMenuBg = $('.main-navigation-wrapper').css("background-color");
      $(context)
        .find(".main-navigation-wrapper ul.w3-menu-0-main__submenu")
        .once(".main-navigation-wrapper ul.w3-menu-0-main__submenu")
        .css("background-color", subMenuBg);

      // Add classes to search page.
      $(context)
        .find(".search-form .search-advanced")
        .once(".search-form .search-advanced")
        .addClass("w3-padding-large w3-border w3-bar w3-left-align w3-margin-bottom");
      $(context)
        .find(".search-form .search-advanced > summary")
        .once("summary")
        .addClass("w3-button w3-bar w3-left-align");
      $(context)
        .find(".search-form .search-help-link")
        .once(".search-form .search-help-link")
        .addClass("w3-button w3-right w3-border");
      // Add button class to any link inside li.
      $(context)
        .find("ul.w3-menu-main li > ul li")
        .once("li")
        .removeClass("w3-bar-item");
      // w3-search-block-form.
      $(context)
        .find(".w3-search-block-form .form-type-search")
        .once(".form-type-search")
        .addClass("w3-col l8 w3-mobile");
      $(context)
        .find(".w3-search-block-form .form-actions")
        .once(".form-actions")
        .addClass("w3-col l4 w3-mobile");
      // Multi value table draggable.
      $(context)
        .find("div.tabledrag-toggle-weight-wrapper button")
        .once("button")
        .addClass("w3-button");
      // theme setttings
      $(context)
        .find('form#system-theme-settings details')
        .once('details')
        .removeAttr('open')
        .addClass("w3-border w3-bar w3-left-align w3-margin-bottom");
      $(context)
        .find('form#system-theme-settings details > summary')
        .once('summary')
        .addClass("w3-button w3-bar w3-left-align");
      $(context)
        .find('form#system-theme-settings details > div.details-wrapper')
        .once('div.details-wrapper')
        .addClass("w3-padding-large w3-left-align");
    }
  };

})(jQuery, Drupal);
