/**
 * @file
 * Defines Javascript behaviors for the drupal8 w3css theme.
 */

(function ($, Drupal) {
  'use strict';
    // Add flex position to the main menu at scroll.
  var mainNavigation = document.querySelector('#main-navigation-h');
  var currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var currentHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    // In case the main menu not printed.
  var origOffsetY;
  if ($('#main-navigation-h .ul-parent').length > 0) {
    origOffsetY = mainNavigation.offsetTop;
  }
  function scrollWindow(e) {
    if (window.scrollY > origOffsetY) {
      mainNavigation.classList.add('w3-fixed');
    }
    else {
      mainNavigation.classList.remove('w3-fixed');
    }
  }
    // Make sure all the divs inside any region are equal height.
    // make sure the height is the same for all top regions.
  function mediaSize() {
    if (currentWidth >= 993) {
            // Add class to the body for large screen.
      $('body').removeClass('small-screen medium-screen').addClass('large-screen');
      $('.ul-parent').removeClass('w3-show');
            // Make sure all the inside regions have the same height.
      $('.top-region').matchHeight({property: 'height'});
      $('.main-region').matchHeight({property: 'height'});
      $('.bottom-region').matchHeight({property: 'height'});
      $('.footer-region').matchHeight({property: 'height'});
    }
    else if ((currentWidth >= 601) && (currentWidth <= 992)) {
            // Add class to the body for medium screen.
      $('body').removeClass('small-screen large-screen').addClass('medium-screen');
    }
    else if (currentWidth <= 600) {
            // Add class to the body for small screen.
      $('body').removeClass('large-screen medium-screen').addClass('small-screen');
    }
    else if (currentWidth <= 992) {
            // Remove the match height on small screen.
      $('.top-region').matchHeight({remove: true});
      $('.main-region').matchHeight({remove: true});
      $('.bottom-region').matchHeight({remove: true});
      $('.footer-region').matchHeight({remove: true});
    }
  }
  Drupal.behaviors.drupal8_w3css_theme = {
    attach: function (context, settings) {
      settings.drupal8_w3css_theme = settings.drupal8_w3css_theme || {};

      $(context)
            .find('ul')
            .once('ul')
            .each(function () {
              var depth = $(this).parents('ul').length;
              $(this).addClass('ul-' + depth);
            });
      $(context)
            .find('ul li')
            .once('ul li')
            .each(function () {
              var depth = $(this).parents('li').length;
              $(this).addClass('li-' + depth);
            });
      $(context)
            .find('#main-navigation-v #close-nav')
            .once('#main-navigation-v #close-nav')
            .on(
                'click', function () {
                  document.getElementById('main-navigation-v').style.display = 'none';
                }
            );
      $(context)
            .find('#open-nav-inner')
            .once('#open-nav-inner')
            .on(
                'click', function () {
                  document.getElementById('main-navigation-v').style.display = 'block';
                }
            );
            // On click expand the dropdown menu for small device.
            // Show the mobile menu on click horizontal.
      $(context)
            .find('.mobile-nav')
            .once('.mobile-nav')
            .on(
                'click', function () {
                  var x = document.getElementById('main-menu');
                  if (x.className.indexOf('w3-show') === -1) {
                    x.className += ' w3-show';
                  }
                  else {
                    x.className = x.className.replace(' w3-show', '');
                  }
                }
            );
            $(context)
            .find('.tMenu')
            .once('.tMenu')
            .on(
                'click', function (e) {
            var myWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (myWidth <= 992) {
            e.preventDefault();
            var $this = $(this);
            if ($this.next().hasClass('w3-show')) {
                $this.next().removeClass('w3-show');
                $this.next().slideUp(350);
            }
             else {
                $this.parent().parent().find('ul-child').removeClass('w3-show');
                $this.parent().parent().find('ul-child').slideUp(350);
                $this.next().toggleClass('w3-show');
                $this.next().slideToggle(350);
            }
          }
        });
            // Change the form color to match the footer color.
      var footerFormBg = $('#footer-menu').css('background-color');
      $(context)
            .find('#footer-menu form')
            .once('#footer-menu form')
            .css('background-color', footerFormBg);
            // Change the sumbmenu color as the main menu.
      var subMenuBg = $('.main-navigation-wrapper').css('background-color');
      $(context)
            .find('.main-navigation-wrapper .ul-child')
            .once('.main-navigation-wrapper ul-child')
            .css('background-color', subMenuBg);
            // Add classes to search page.
      $(context)
            .find('.search-form .search-advanced')
            .once('.search-form .search-advanced')
            .addClass('w3-padding-large w3-border w3-bar w3-left-align w3-margin-bottom');
      $(context)
            .find('.search-form .search-advanced > summary')
            .once('summary')
            .addClass('w3-button w3-bar w3-left-align');
      $(context)
            .find('.search-form .search-help-link')
            .once('.search-form .search-help-link')
            .addClass('w3-button w3-right w3-border w3-margin-top');
      $(context)
            .find('.tabledrag-toggle-weight-wrapper button')
            .once('button')
            .addClass('w3-button');
            // Theme setttings.
      $(context)
            .find('#system-theme-settings details')
            .once('details')
            .removeAttr('open')
            .addClass('w3-border w3-bar w3-left-align w3-margin-bottom');
      $(context)
            .find('#system-theme-settings details > summary')
            .once('summary')
            .addClass('w3-button w3-bar w3-left-align');
      $(context)
            .find('#system-theme-settings details > div.details-wrapper')
            .once('.details-wrapper')
            .addClass('w3-padding-large w3-left-align');
      $(context)
            .find('a > .w3-image')
            .once('a > .w3-image')
            .each(
                function () {
                  $(this).parent().addClass('d8-has-image');
                }
            );
      mediaSize();
      window.addEventListener('resize', mediaSize);
      document.addEventListener('scroll', scrollWindow);

    }
  };
})(jQuery, Drupal);
