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

function pintarTarjetas() {
    let contenido = " ";
    let desde = parseInt(document.getElementById("txtDesde").value);
    let hasta = parseInt(document.getElementById("txtHasta").value);
    let salto = parseInt(document.getElementById("txtSalto").value);

    let divTarjetas = document.getElementById("divTarjetas");
    for (i = desde; i <= hasta; i += salto) {
        contenido = contenido + "<div class='item'>" + i + "</div>";
    }
    divTarjetas.innerHTML = contenido;

}
