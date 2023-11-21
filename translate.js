let linguaPortuguesa = document.createElement("script");
linguaPortuguesa.src = "./idioma/portugues.js";
document.head.appendChild(linguaPortuguesa);

let linguaEspanhola = document.createElement("script");
linguaEspanhola.src = "./idioma/espanol.js";
document.head.appendChild(linguaEspanhola);

let linguaInglesa = document.createElement("script");
linguaInglesa.src = "./idioma/ingles.js";
document.head.appendChild(linguaInglesa);

let linguaFrancesa = document.createElement("script");
linguaFrancesa.src = "./idioma/frances.js";
document.head.appendChild(linguaFrancesa);

let selectIdioma = document.querySelector("#idiomas");
selectIdioma.addEventListener("change", function () {
    translate(this.value);
})

function translate(idiomas) {
    let traducao = 
    (idiomas == "br") ? portugues() 
    :(idiomas == "es") ? espanol() 
    :(idiomas == "en") ? ingles() 
    :(idiomas == "fr") ? frances() 
    : null;
    setLangue(traducao);
}

function setLangue(novoIdioma) {
    let btTitulo = document.querySelector("#titulo");
    btTitulo.innerHTML = novoIdioma.ttl;

    let btSoma = document.querySelector("#btSoma");
    btSoma.value = novoIdioma.soma;

    let btSub = document.querySelector("#btSub");
    btSub.value = novoIdioma.sub;

    let btMult = document.querySelector("#btMult");
    btMult.value = novoIdioma.mult;

    let btDiv = document.querySelector("#btDiv");
    btDiv.value = novoIdioma.div;
}