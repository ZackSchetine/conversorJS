import prompt from 'prompt-sync';
const teclado = prompt();

import bordas from './bordas.js';
import validarNumero from './validarNumero.js';
import numeroNegativo from './numeroNegativo.js';

function menuConvPesoDisplay() {
    bordas(0);
    console.log("|       Menu conversão de pesos         |");
    bordas(2);
    console.log("|Escolha uma das seguintes opções:      |");
    console.log("|1 - pounds(lbs) para quilo(kg)          |");
    console.log("|2 - quilo(kg) para pounds(lbs)         |");
    console.log("|3 - ounces(oz) para grama(g)           |");
    console.log("|4 - grama(g) para ounces(oz)           |");
    console.log("|5 - Voltar a tela inicial              |");
    console.log("|6 - Fechar o programa                  |");
    bordas(1);
}

export default function convPeso() {
    let opcaoInterna = 0;
    let valor = 0;

    do {
        menuConvPesoDisplay();
        opcaoInterna = Number(teclado());
        switch (opcaoInterna) {
            case 1:
                //lb para kg
                bordas(0);
                console.log("|Informe o valor a ser convertido:      |");
                bordas(1);
                valor = Number(teclado()); // parseFloat(prompt());
                if (numeroNegativo(validarNumero(valor))) {
                    const lbToKg = ((valor / 2.20462262).toFixed(2));
                    bordas(0);
                    console.log(`|O valor a ser convertido é: `.padEnd(40, " ") + `|`);
                    console.log(`|${valor}lbs que é igual a ${lbToKg}kg`.padEnd(40, " ") + `|`);
                    bordas(1);
                }
                break;

            case 2:
                //kg para lb
                bordas(0);
                console.log("|Informe o valor a ser convertido:      |");
                bordas(1);
                valor = Number(teclado());
                if (numeroNegativo(validarNumero(valor))) {
                    const kgToLb = (valor * 2.20462262).toFixed(2);
                    bordas(0);
                    console.log(`|${valor}kg é igual a ${kgToLb}lbs`.padEnd(40, " ") + `|`);
                    bordas(1);
                }
                break;

            case 3:
                //oz para g
                bordas(0);
                console.log("|Informe o valor a ser convertido:      |");
                bordas(1);
                valor = Number(teclado());
                if (numeroNegativo(validarNumero(valor))) {
                    const ozToGrams = (valor / 0.0352739619).toFixed(2);
                    bordas(0);
                    console.log(`|${valor}oz é igual a ${ozToGrams}g`.padEnd(40, " ") + `|`);
                    bordas(1);
                }
                break;

            case 4:
                //g para oz
                bordas(0);
                console.log("|Informe o valor a ser convertido:      |");
                bordas(1);
                valor = Number(teclado());
                if (numeroNegativo(validarNumero(valor))) {
                    const GramsToOz = (valor * 0.0352739619).toFixed(2);
                    bordas(0);
                    console.log(`|${valor}g é igual a ${GramsToOz}oz`.padEnd(40, " ") + `|`);
                    bordas(1);
                }
                break;

            case 5:
                bordas(0);
                console.log("|        Voltando a tela inicial        |");
                bordas(1);
                break;

            case 6:
                bordas(0);
                console.log("|          Saindo do programa           |");
                bordas(1);
                process.exit();

            default:
                bordas(0);
                console.log("|            Opção inválida             |");
                bordas(1);
        }
    } while (opcaoInterna != 5);
}