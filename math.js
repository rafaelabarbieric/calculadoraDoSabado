let ttl = document.querySelector("#titulo");
let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let soma = document.querySelector("#btSoma");
let sub = document.querySelector("#btSub");
let mult = document.querySelector("#btMult");
let div = document.querySelector("#btDiv");
let resultado = document.querySelector("#resultado");

soma.addEventListener("click", function(){
    somar(Number(valor1.value), Number(valor2.value));
})

function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma;
}

sub.addEventListener("click", function(){
    subtrair(Number(valor1.value), Number(valor2.value));
})

function subtrair(a, b) {
    let sub = a - b;
    resultado.innerHTML = sub;
}

mult.addEventListener("click", function(){
    multiplicar(Number(valor1.value), Number(valor2.value));
})

function multiplicar(a, b) {
    let mult = a * b;
    resultado.innerHTML = mult;
}

div.addEventListener("click", function(){
    dividir(Number(valor1.value), Number(valor2.value));
})

function dividir(a, b) {
    let div = a / b;
    resultado.innerHTML = div;
}

