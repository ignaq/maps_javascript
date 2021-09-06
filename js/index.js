window.onload = function cargaMap() {

    let myPosition = new google.maps.LatLng(-34.602209, -58.376626);
  
    let option = {
        zoom: 15,
        center: myPosition,
        mapTypeId: 'roadmap'
    };
  
    map = new google.maps.Map(document.getElementById('map'), option);
}