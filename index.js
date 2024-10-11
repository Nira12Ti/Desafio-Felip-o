let score = 1000;
let nomeHeroi = "Superman";

function calcularNivelHeroi(score) {
    if(score <= 1000){
        return "Ferro";
    } else if (score >= 1001 && score <= 2000) {
        return "Bronze";
    } else if (score >= 2001 && score <= 5000) {
        return "Prata";
    } else if (score >= 5001 && score <= 7000) {
        return "Ouro";
    } else if (score >= 7001 && score <= 8000) {
        return "Platina";
    } else if (score >= 8001 && score <= 9000) {
        return "Ascendente";
    } else if (score >= 9001 && score <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

function init() {
    const nivelHeroi = calcularNivelHeroi(score);

    console.log(`O heroi ${nomeHeroi} esta no nivel ${nivelHeroi}`);
}

init();
