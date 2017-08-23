/**
 * @file
 * Defines Javascript behaviors for the drupal8 w3css theme.
 */

(function ($, Drupal) {
  'use strict';
    // Used for fixed menu.
  var origOffsetY;
  var mainNavigation = document.querySelector('#main-navigation-h');
    // Used for resizing behaviors.
  var resizeTimeoutId;
  var resizeTimeoutDuration = 100;
  var currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var resizeDebounce = function () {
    clearTimeout(resizeTimeoutId);
    resizeTimeoutId = setTimeout(doneResizing, resizeTimeoutDuration);
  };
    // In case the main menu not printed.
  if ($('#main-navigation-h .ul-parent').length > 0) {
    origOffsetY = mainNavigation.offsetTop;
  }
    // Add flex position to the main menu at scroll.
  function scrollWindow(e) {
    if (window.scrollY > origOffsetY) {
      mainNavigation.classList.add('w3-fixed');
    }
    else {
      mainNavigation.classList.remove('w3-fixed');
    }
  }
  var mediaSize = function () {
    var currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var childMenu = $('.main-navigation-wrapper').css('background-color');
    if (currentWidth >= 993) {
            // Add class to the body for large screen.
      $('body').addClass('large-screen');
      $('body').removeClass('mall-screen');
      $('body').removeClass('medium-screen');
      $('.ul-parent').removeClass('w3-show');
      $('.ul-child').removeClass('w3-show');
      $('.ul-child').removeAttr('style');
      $('.ul-child').css('background-color', childMenu);
            // Make sure all the inside regions have the same height.
      $('.top-region').matchHeight({property: 'height'});
      $('.main-region').matchHeight({property: 'height'});
      $('.bottom-region').matchHeight({property: 'height'});
      $('.footer-region').matchHeight({property: 'height'});
    }
    else if ((currentWidth >= 601) && (currentWidth <= 992)) {
            // Add class to the body for medium screen.
      $('body').addClass('medium-screen');
      $('body').removeClass('large-screen');
      $('body').removeClass('small-screen');
    }
    else if (currentWidth <= 600) {
            // Add class to the body for small screen.
      $('body').addClass('small-screen');
      $('body').removeClass('large-screen');
      $('body').removeClass('medium-screen');
    }
    else if (currentWidth <= 992) {
            // Remove the match height on small screen.
      $('.top-region').matchHeight({remove: true});
      $('.main-region').matchHeight({remove: true});
      $('.bottom-region').matchHeight({remove: true});
      $('.footer-region').matchHeight({remove: true});
    }
  };

  Drupal.behaviors.d8w3cssMenuDepth = {
    attach: function (context, settings) {
            // Add class to any UL/LI according to the depth.
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
    }
  };

  Drupal.behaviors.d8w3cssMainNav = {
    attach: function (context, settings) {

            // On click show/hide the vertical main menu.
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
            // On click expand the dropdown menu for small device.
      $(context)
            .find('.tMenu')
            .once('.tMenu')
            .on(
                'click', function (e) {
                  var currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                  if ((currentWidth <= 992) || ($('#main-navigation-v').css('display') == 'block')) {
                    e.preventDefault();
                    var $this = $(this);
                    if ($this.next().hasClass('w3-show')) {
                      $this.next().removeClass('w3-show');
                      $this.next().slideUp(500);
                    }
                    else {
                      $this.parent().parent().find('ul-child').removeClass('w3-show');
                      $this.parent().parent().find('ul-child').slideUp();
                      $this.next().toggleClass('w3-show');
                    }
                  }
                });
    }
  };

  Drupal.behaviors.d8w3cssTheme = {
    attach: function (context, settings) {
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
      scrollWindow();
      mediaSize();
      window.addEventListener('resize', mediaSize);
      document.addEventListener('scroll', scrollWindow);
    }
  };
})(jQuery, Drupal);
