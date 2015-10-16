'use strict';
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');

var SlidingMarker = require('expose?$!expose?google.maps.Marker!marker-animate-unobtrusive'),
    MarkerWithLabel = require('MarkerWithLabel'),
    $ = require('jquery');

var count = 0,
    marker, map;

function initialize() {
  var myLatlng = new google.maps.LatLng(32.520204, 34.937258);
  var mapOptions = {
    zoom: 4,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map($('#map')[0], mapOptions);

  marker = new MarkerWithLabel({
    position: myLatlng,
    title: 'sample',
    labelContent: '<h4>Label ' + count + '</h4>',
    labelAnchor: new google.maps.Point(30, 30),
    labelClass: 'label label-xs label-info',
    labelInBackground: false,
    duration: 1000,
    easing: 'linear'
  });
  marker.setMap(map);
}

$(function() {
  initialize();

  google.maps.event.addListener(map, 'click', function(event) {
    // var duration = 1000; // ms
    // marker.setDuration(duration);
    // marker.setEasing('linear');
    marker.set('labelContent', '<h4>Label ' + count + '</h4>');
    marker.setPosition(event.latLng);
    count++;
  });
});