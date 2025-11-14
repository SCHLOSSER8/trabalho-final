// Aqui ficarão as 14 redações
const redacoes = {
    1: "Redação 1 ainda não enviada.",
    2: "Redação 2 ainda não enviada.",
    3: "Redação 3 ainda não enviada.",
    4: "Redação 4 ainda não enviada.",
    5: "Redação 5 ainda não enviada.",
    6: "Redação 6 ainda não enviada.",
    7: "Redação 7 ainda não enviada.",
    8: "Redação 8 ainda não enviada.",
    9: "Redação 9 ainda não enviada.",
    10: "Redação 10 ainda não enviada.",
    11: "Redação 11 ainda não enviada.",
    12: "Redação 12 ainda não enviada.",
    13: "Redação 13 ainda não enviada.",
    14: "Redação 14 ainda não enviada."
};

// Abre a redação no modal
function abrirRedacao(num) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("tituloRedacao").textContent = "Redação " + num;
    document.getElementById("textoRedacao").textContent = redacoes[num];
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}
