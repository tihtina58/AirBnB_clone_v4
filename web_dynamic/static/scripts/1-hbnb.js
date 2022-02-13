#!/usr/bin/node
/*
script that Listen for changes on each INPUT checkbox tag.
*/
const amenitiesIds = {};

$(document).ready(function () {
  $('input[type="checkbox"]').click(function () {
    if ($(this).is(':checked')) {
      amenitiesIds[$(this).attr('data-id')] = $(this).attr('name');
    } else {
      delete amenitiesIds[$(this).attr('data-id')];
    }
    $('.amenities h4').text(Object.values(amenitiesIds).join(', '));
  });
});
