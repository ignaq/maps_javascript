const myModal = new bootstrap.Modal(document.getElementById('modalId'))
const form = document.getElementById('form');

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
        
    myModal.show()
    
})


}

let arrayMarkers = [];
let idMarker = 1;

form.addEventListener('submit', e => {
    e.preventDefault();
    
    getValuesFromForm();
})


function getValuesFromForm(){
    let nombre = document.getElementById('inputNombre').value;
    let direccion = document.getElementById('inputDireccion').value;
    let tel = document.getElementById('inputTelefono').value;
    let coords = document.getElementById('coords').value;
    let categ = document.getElementById('categoria').value;

    if(nombre != '' && direccion != ''){
        myModal.hide();
    addMarker(nombre,direccion,tel,coords,categ);
    }

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

    marker.id = idMarker;
    idMarker++;
    
    let infoWindow = new google.maps.InfoWindow({
        content: `<p>Nombre: ${nombre}</p>
                 <p>Dirección: ${direccion}</p>
                 <p>Teléfono: ${telefono}</p>
                <p>Categoría: ${cat}</p>
    <button type='button' onclick='deleteMarker(${marker.id});' />Eliminar</button> `
  });

  


  marker.addListener("click", ()=> {
      infoWindow.open(map, marker);
  })
    
  arrayMarkers.push(marker);
}


function deleteMarker(id){
    for (let i = 0; i < arrayMarkers.length; i++) {
           if(arrayMarkers[i].id == id){
            arrayMarkers[i].setMap(null); 
            arrayMarkers.splice(i,1);
             return;
           }
      }

}
