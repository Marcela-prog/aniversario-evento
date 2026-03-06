const dataEvento = new Date("Jul 1, 2026 19:00:00").getTime();

const contador = setInterval(function() {

    const agora = new Date().getTime();

    const distancia = dataEvento - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML =
        dias + "d " + horas + "h " + minutos + "m " + segundos + "s";

}, 1000);

const botao = document.getElementById('botaoConfirmar');

botao.addEventListener('click', function() {
    alert("Prepare sua melhor máscara, nos vemos em breve 🎭");
});