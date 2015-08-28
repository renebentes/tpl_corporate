/*!
 * Corporate Template: corporate.js v0.2.0
 * http://github.com/renebentes/corporate
 *
 * Author: Rene Bentes Pinto <renebentes@yahoo.com.br>
 * Link: http://renebentes.github.io
 * Copyright 2013 -2015 Rene Bentes Pinto, Inc. All rights reserved.
 * License under the terms of the GPL v2; see LICENSE
 */

if (typeof jQuery === 'undefined') {
  throw new Error('This Javascript requires jQuery!');
}

+function ($) {
  'use strict';

  // Call Tooltip
  $('.hasTooltip').tooltip()

  // Call Button & Input Tooltip
  $('.extra-tooltip').tooltip({
    container: 'body'
  })

  // Call popover
  $('.hasPopover').popover({
    trigger: 'hover',
    html: true
  })

  // Call Button & Input Popover
  $('.extra-popover').popover({
    container: 'body'
  })

  // Call Modal Ever
  $('.modal.modal-opened').modal('show')

  // Call Remote URL In Modal
  $('.modal-remote').click(function (e) {
    var button = $(this)
    var content = button.data('content') || (button.attr('href') && button.attr('href').replace(/.*(?=#[^\s]+$)/, ''))
    var target = button.data('target')
    var title = button.data('original-title') || button.attr('title') || ''
    var size = button.data('size') || ''

    e.preventDefault()

    $(target).find('.modal-dialog').removeClass('modal-lg modal-sm').toggleClass(size)
    $(target).find('.modal-title').text(title)

    if (content) {
      $(target).find('.modal-body').html(
        '<div class="embed-responsive embed-responsive-16by10">' +
        '  <iframe class="embed-responsive-item" src="' + content + '" allowfullscreen></iframe>' +
        '</div>'
      )
    }

    $(target).modal('show')
  })

  // Scroll top
  $(window).scroll(function () {
    if ($(this).scrollTop() !== 0) {
      $('.scroll-top').fadeIn()
    }
    else {
      $('.scroll-top').fadeOut()
    }
  })

  $('.scroll-top').click(function (e) {
    e.preventDefault()
    $('html, body').animate(
      { scrollTop: 0 },
      800
    )
  })
}(jQuery);
