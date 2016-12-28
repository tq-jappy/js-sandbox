'use strict';
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');

import ex1 from './examples/promise-while-loop';

const $ = require('jquery');

const initialize = () => {
  var myLatlng = new google.maps.LatLng(32.520204, 34.937258);
  var mapOptions = {
    zoom: 4,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  const map = new google.maps.Map($('#map')[0], mapOptions);
  const marker = new google.maps.Marker({ map: map, position: myLatlng });

  return [map, marker];
};

$(function() {
  console.log('initialize');
  ex1.exec();
  /*
  const [ map, marker ] = initialize();
  console.log('initialize', map, marker);

  google.maps.event.addListener(map, 'click', function(event) {
    marker.setPosition(event.latLng);
  });
  */
});