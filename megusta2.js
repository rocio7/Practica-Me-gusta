var count=[9,12,9];

function like(identificador,posicion) {
    var countElement = document.querySelector('#'+ identificador );
    count [posicion]++;
    countElement.innerHTML =count[posicion] + " like(s)";
}