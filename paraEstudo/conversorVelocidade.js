// Outra possibilidade de código. 
const prompt = require('prompt-sync')();

// Função para exibir o menu de conversão de velocidades
function menuConVelDisplay() {
    console.log("|     Menu conversão de velocidades      |");
    console.log("|Escolha uma das seguintes opções:      |");
    console.log("|1 - km/h para m/s                      |");
    console.log("|2 - m/s para km/h                      |");
    console.log("|3 - Voltar a tela inicial              |");
}

// Função para converter km/h para m/s
function kmhParaMs() {
    console.log("|Informe o valor a ser convertido:      |");
    const valor = parseFloat(prompt());
    if (isNaN(valor) || valor < 0) {
        console.log("Valor inválido.");
        return;
    }
    const resultado = (valor / 3.6).toFixed(2);
    console.log(`${valor} km/h é igual a ${resultado} m/s.`);
}

// Função para converter m/s para km/h
function msParaKmh() {
    console.log("|Informe o valor a ser convertido:      |");
    const valor = parseFloat(prompt());
    if (isNaN(valor) || valor < 0) {
        console.log("Valor inválido.");
        return;
    }
    const resultado = (valor * 3.6).toFixed(2);
    console.log(`${valor} m/s é igual a ${resultado} km/h.`);
}

// Função principal para o menu de conversão de velocidades
function conVelocidade() {
    let opcaoInterna = 0;
    do {
        console.log();
        menuConVelDisplay();
        opcaoInterna = parseInt(prompt());
        switch (opcaoInterna) {
            case 1:
                kmhParaMs();
                break;

            case 2:
                msParaKmh();
                break;

            case 3:
                console.log("|        Voltando a tela inicial        |");
                break;

            default:
                console.log("|            Opção inválida             |");
        }
    } while (opcaoInterna !== 3);
}

module.exports = conVelocidade;
