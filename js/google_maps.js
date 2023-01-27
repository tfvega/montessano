// api key AIzaSyBAe61TXsos3WoHRtNTdlhkGJiwkeKSRak 24.799236, -107.390358
// Initialize and add the map
function iniciarMapa(){

    const coord = { lat: 24.804196, lng: -107.466274 };
    // The map, centered at Uluru
    const map = new google.maps.Map(
      document.getElementById("map"),
      {
        zoom: 13,
        center: coord,
      }
    );
    
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: coord,
      map: map,
    });
}