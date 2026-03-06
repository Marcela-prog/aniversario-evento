const dataEvento = new Date("Jul 1, 2026 19:00:00").getTime();
const contador = setInterval(function() {
    const agora = new Date().getTime();
    const distancia = dataEvento - agora;
    const dias = Math.floor(distancia / 86400000);
    const horas = Math.floor(distancia % 86400000 / 3600000);
    const minutos = Math.floor(distancia % 3600000 / 60000);
    const segundos = Math.floor(distancia % 60000 / 1000);
    document.getElementById("contador").innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s";
}, 1000);
const botao = document.getElementById('botaoConfirmar');
botao.addEventListener('click', function() {
    alert("Prepare sua melhor m\xe1scara, nos vemos em breve \uD83C\uDFAD");
});

//# sourceMappingURL=aniversario_evento.f75de5e1.js.map
