//setting the view boundaries of the map
var map = L.map('map').setView([36.0695, -86.7980], 12);

//creating the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//routing system
L.Routing.control({
  show: false,
  draggableWaypoints: false,
  waypoints: [
    L.latLng(36.03387, -86.80525),
    L.latLng(36.09288, -86.82546),
    L.latLng(36.11218, -86.76255)

  ]
}).addTo(map);

//pop up
var popup = L.popup()
    .setLatLng([36.1132, -86.8077])
    .setContent("This route takes around: 12 min (4.8mi)")
    .addTo(map);

    var popup = L.popup()
    .setLatLng([36.0637, -86.8133])
    .setContent("This route takes around: 12 min (5.9 mi)")
    .addTo(map);