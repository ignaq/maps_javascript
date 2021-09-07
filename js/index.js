window.onload = function cargaMap() {
    let myPosition = new google.maps.LatLng(-34.602209, -58.376626);
  
    let option = {
        zoom: 15,
        center: myPosition,
        mapTypeId: 'roadmap'
    };
  
    map = new google.maps.Map(document.getElementById('map'), option);

    map.addListener('click', function(event){
  
    document.getElementById("coords").value = event.latLng.lat() + ", " + event.latLng.lng();
    
      let myModal = new bootstrap.Modal(document.getElementById('modalId'))
        myModal.show()

    })


}

function getValuesFromForm(){
    let inputNombre = document.getElementById('inputNombre').value;
    let inputDireccion = document.getElementById('inputDireccion').value;
    let inputTelefono = document.getElementById('inputTelefono').value;
    let coords = document.getElementById('coords').value;
    let categoria = document.getElementById('categoria').value;



}


