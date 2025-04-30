const iconBase = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/';
const map = L.map('map').setView([42.385265, -87.963310], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const icons = {
  Outdoor: L.icon({
    iconUrl: iconBase + 'marker-icon-green.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  Indoor: L.icon({
    iconUrl: iconBase + 'marker-icon-blue.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  Striped: L.icon({
    iconUrl: iconBase + 'marker-icon-yellow.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })
};

const markerGroups = {
  Outdoor: [],
  Indoor: [],
  Striped: []
};

locations.forEach(loc => {
  const marker = L.marker([loc.lat, loc.lng], { icon: icons[loc.type] })
    .bindPopup(`
      <strong>${loc.name}</strong><br>
      <i>${loc.address}</i><br>
      ${loc.type}<br>
      ${loc.courts}<br>
      <a href="https://www.google.com/maps?q=${encodeURIComponent(loc.address)}" target="_blank">Directions</a>
    `);
  markerGroups[loc.type].push(marker);
  marker.addTo(map);
});

function toggleMarkers(type) {
  const btn = document.getElementById(type.toLowerCase());
  const isSelected = btn.classList.contains('selected');
  btn.classList.toggle('selected');
  
  if (isSelected) {
    markerGroups[type].forEach(marker => map.removeLayer(marker));
  } else {
    markerGroups[type].forEach(marker => marker.addTo(map));
  }
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    position => {
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;

      // Add marker to map
      const userMarker = L.marker([userLat, userLng])
        .addTo(map)
        .bindPopup("You are here")
        .openPopup();

      // Optionally pan to user's location
      map.setView([userLat, userLng], 13);
    },
    error => {
      console.warn("Geolocation failed:", error.message);
    }
  );
} else {
  console.warn("Geolocation is not supported by this browser.");
}