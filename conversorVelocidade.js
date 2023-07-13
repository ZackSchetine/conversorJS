let teclado = require('prompt-sync')();

const bordas = require('./bordas');
const validarNumero = require('./validarNumero');
const numeroNegativo = require('./numeroNegativo');

let opcaoInterna = 0;
let valor = 0;

//Display do menu de velocidades 
function menuConVelDisplay() {
    bordas(0);
    console.log("|     Menu conversão de velocidades      |");
    bordas(2);
    console.log("|Escolha uma das seguintes opções:      |");
    console.log("|1 - km/h para m/s                      |");
    console.log("|2 - m/s para km/h                      |");
    console.log("|3 - Voltar a tela inicial              |");
    bordas(1);
}

//Menu de conversão de velocidades
function conVelocidade() {
    const number = 1.609344; // atualizar aqui
    do {
        menuConVelDisplay();
        opcaoInterna = Number(teclado());
        switch (opcaoInterna) {
            case 1:
                //km/h para m/s
                bordas(0);
                console.log("|Informe o valor a ser convertido:      |");
                bordas(1);
                valor = Number(teclado());
                if (numeroNegativo(validarNumero(valor))) {
                    const kilometersToMeters = ((valor / number).toFixed(2));
                    bordas(0);
                    console.log(`|O valor a ser convertido é: `.padEnd(40, " ") + `|`);
                    console.log(`|${valor}km/h que é igual a ${kilometersToMeters}m/s`.padEnd(40, " ") + `|`);
                    bordas(1);
                }
                break;

            case 2:
                //mi para km
                bordas(0);
                console.log("|Informe o valor a ser convertido:      |");
                bordas(1);
                valor = Number(teclado());
                if (numeroNegativo(validarNumero(valor))) {
                    const metersToKilometers = (valor * number).toFixed(2);
                    bordas(0);
                    console.log(`${valor}m/s é igual a ${metersToKilometers}km/h`.padEnd(40, " ") + `|`);
                    bordas(1);
                }
                break;

            case 3:
                bordas(0);
                console.log("|        Voltando a tela inicial        |");
                bordas(1);
                break;

            default:
                bordas(0);
                console.log("|            Opção inválida             |");
                bordas(1);
        }
    } while (opcaoInterna != 3);
}

module.exports = conVelocidade;