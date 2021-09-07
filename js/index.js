
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
    
         const myModal = new bootstrap.Modal(document.getElementById('modalId'))
        
        myModal.show()

    })


}

let arrayMarkers = [];
let idMarker = 1;

function getValuesFromForm(){
    let inputNombre = document.getElementById('inputNombre').value;
    let inputDireccion = document.getElementById('inputDireccion').value;
    let inputTelefono = document.getElementById('inputTelefono').value;
    let coords = document.getElementById('coords').value;
    let categoria = document.getElementById('categoria').value;

    addMarker(inputNombre,inputDireccion,inputTelefono,coords,categoria);

}

function addMarker(nombre,direccion,telefono,coords,cat){
    
  
    let split = coords.split(',') 
    let lat = split[0] 
    let lon = split[1]

    let position = {lat: parseFloat(lat), lng: parseFloat(lon)};

    let marker = new google.maps.Marker({
        position: position,
        map: map,
    });

    
    
    let infoWindow = new google.maps.InfoWindow({
        content: `<h2>Nombre: ${nombre}</h2>
                 <p>Dirección: ${direccion}</p>
                 <p>Teléfono: ${telefono}</p>
                <p>Categoría: ${cat}</p>`
  });

  


  marker.addListener("click", ()=> {
      infoWindow.open(map, marker);
  })
    
  arrayMarkers.push(marker);
}
