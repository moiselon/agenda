function cargar() {

    var divcuerpo = document.getElementById('cuerpo');
    fetch("http://www.raydelto.org/agenda.php").then(function(respuesta){
        return respuesta.json();
    }).then(function(respuesta){
        
        var contacto = respuesta[0];

        divcuerpo.innerHTML = contacto.nombre + " " + contacto.apellido + " " +contacto.telefono;
        

    }); 

}



