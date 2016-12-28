const functions = {

  exec(map) {
    console.log('start polyline', map);

    const coordinates = [
      new google.maps.LatLng(37.772, -122.214),
      new google.maps.LatLng(21.291, -157.821),
      new google.maps.LatLng(-18.142, 178.431),
      new google.maps.LatLng(-27.467, 153.027)
    ];

    const bounds = new google.maps.LatLngBounds(coordinates[0]);

    const fitBoundsMap = (latLng) => {
      bounds.extend(latLng);
      console.log('fit bounds');
      map.fitBounds(bounds);
    };

    const polyline = new google.maps.Polyline({
      path: [ coordinates[0] ],
      geodesic: false,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    polyline.setMap(map);

    coordinates.forEach((p, i) => {
      if (i) {
        console.log('check', p.lat(), p.lng());
        const path = polyline.getPath();
        path.push(p);
        polyline.setPath(path);
        fitBoundsMap(p);
      }
    });
  }
}

export default functions;