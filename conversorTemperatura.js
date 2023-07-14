import prompt from 'prompt-sync';
const teclado = prompt();

import bordas from './bordas.js';
import validarNumero from './validarNumero.js';

let opcaoInterna = 0;
let valor = 0;

//Display do menu de temperaturas 
function menuConvTempDisplay() {
    bordas(0);
    console.log("|     Menu conversão de temperatura     |");
    bordas(2);
    console.log("|Escolha uma das seguintes opções:      |");
    console.log("|1 - Celsius(C) para fahrenheit(F)      |");
    console.log("|2 - Fahrenheit(F) para celsius(C)      |");
    console.log("|3 - Celsius(C) para kelvin(K)          |");
    console.log("|4 - Kelvin(K) para celsius(C)          |");
    console.log("|5 - Voltar a tela inicial              |");
    console.log("|6 - Fechar o programa                  |");
    bordas(1);
}

//Menu de conversão de temperaturas
export default function convTemperaturas() {
    do {
        menuConvTempDisplay();
        opcaoInterna = Number(teclado());
        switch (opcaoInterna) {
            case 1:
                //C para F
                bordas(0);
                console.log("|Informe o valor a ser convertido:      |");
                bordas(1);
                valor = Number(teclado());

                if (validarNumero(valor)) {
                    const celsiusToFahrenheit = ((valor * 9 / 5) + 32).toFixed(2);
                    bordas(0);
                    console.log(`|${valor} C é igual a ${celsiusToFahrenheit} F`.padEnd(40, " ") + `|`);
                    bordas(1);

                };
                break;

            case 2:
                //F para C
                bordas(0);
                console.log("|Informe o valor a ser convertido:      |");
                bordas(1);
                valor = Number(teclado());

                if (validarNumero(valor)) {
                    const fahrenheitToCelsius = ((valor - 32) * 5 / 9).toFixed(2);
                    bordas(0);
                    console.log(`|${valor} F é igual a ${fahrenheitToCelsius} C`.padEnd(40, " ") + `|`);
                    bordas(1);
                }

                break;

            case 3:
                //C para K
                bordas(0);
                console.log("|Informe o valor a ser convertido:      |");
                bordas(1);
                valor = Number(teclado());

                if (validarNumero(valor)) {
                    const celsiusToKelvin = (valor + 273.15).toFixed(2);
                    bordas(0);
                    console.log(`|${valor} C é igual a ${celsiusToKelvin} K`.padEnd(40, " ") + `|`);
                    bordas(1);
                }
                break;

            case 4:
                //K para C
                bordas(0);
                console.log("|Informe o valor a ser convertido:      |");
                bordas(1);
                valor = Number(teclado());

                if (validarNumero(valor)) {
                    const kelvinToCelsius = (valor - 273.15).toFixed(2);
                    bordas(0);
                    console.log(`|${valor} K é igual a ${kelvinToCelsius} C`.padEnd(40, " ") + `|`);
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