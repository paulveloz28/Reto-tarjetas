function crearTarjetas() {
    let contenido = " ";
    let divTarjetas = document.getElementById("divTarjetas");
    for (let i = 1; i <= 5; i++) {
        contenido = contenido + "<div class='item'>" + i + "</div>"
        divTarjetas.innerHTML = contenido;
        //console.log(contenido);
    }

    //divTarjetas.innerHTML="<h1>MODIFICANDO DIV</h1>"
}


