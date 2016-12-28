'use strict';
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');

import ex1 from './examples/promise-while-loop';
import ex2 from './examples/polyline';

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

/*
  const [ map, marker ] = initialize();
  console.log('initialize', map, marker);

  google.maps.event.addListener(map, 'click', function(event) {
    marker.setPosition(event.latLng);
  });

  ex1.loopCounter(3);
  ex2.exec(map);
*/
  let i = 0;
  const action = () => {
    console.log('do loop', i++);
  };
  const init = () => {
    console.log('start loop(main)');
  };
  const condition = () => {
    return i < 15;
  };
  ex1.loopWhile(action, init, condition).then(_ => console.log('end loop(main)'));
});