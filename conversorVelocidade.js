import prompt from 'prompt-sync';
const teclado = prompt();
// Essa função será usada para obter a entrada do usuário no console.

import bordas from './bordas.js';
import validarNumero from './validarNumero.js';
import numeroNegativo from './numeroNegativo.js';

let opcaoInterna = 0;
//  Essa variável será usada para armazenar a opção selecionada pelo usuário no menu de conversão de velocidades.
let valor = 0;
// Essa variável será usada para armazenar o valor a ser convertido entre unidades de velocidade.

//Display do menu de velocidades 
function menuConvVelDisplay() {
    bordas(0);
    console.log("|     Menu conversão de velocidades     |");
    bordas(2);
    console.log("|Escolha uma das seguintes opções:      |");
    console.log("|1 - km/h para m/s                      |");
    console.log("|2 - m/s para km/h                      |");
    console.log("|3 - Voltar a tela inicial              |");
    console.log("|4 - Fechar o programa                  |");
    bordas(1);
}

// Função para converter km/h para m/s
// Ela é responsável por controlar o fluxo do programa e realizar as conversões de velocidade. 
export default function convVelocidade() {
    const factor = 3.6; // constante atualizada
    do {
        menuConvVelDisplay();
        opcaoInterna = Number(teclado());
        switch (opcaoInterna) {
            case 1:
                //km/h para m/s
                bordas(0);
                console.log("|Informe o valor a ser convertido:      |");
                bordas(1);
                valor = Number(teclado()); // parseFloat(prompt());
                if (numeroNegativo(validarNumero(valor))) {
                    const kmToMs = ((valor / factor).toFixed(2));
                    bordas(0);
                    console.log(`|O valor a ser convertido é: `.padEnd(40, " ") + `|`);
                    console.log(`|${valor} km/h que é igual a ${kmToMs} m/s`.padEnd(40, " ") + `|`);
                    bordas(1);
                }
                break;

            case 2:
                //m/s para km/h
                bordas(0);
                console.log("|Informe o valor a ser convertido:      |");
                bordas(1);
                valor = Number(teclado());
                if (numeroNegativo(validarNumero(valor))) {
                    const msToKmh = (valor * factor).toFixed(2);
                    bordas(0);
                    console.log(`${valor} m/s é igual a ${msToKmh} km/h`.padEnd(40, " ") + `|`);
                    bordas(1);
                }
                break;

            case 3:
                bordas(0);
                console.log("|        Voltando a tela inicial        |");
                bordas(1);
                break;

            case 4:
                bordas(0);
                console.log("|          Saindo do programa           |");               
                bordas(1);
                process.exit();
                
            default:
                bordas(0);
                console.log("|            Opção inválida             |");
                bordas(1);
        }
    } while (opcaoInterna != 3);
}

// Sugestão, alterar valor = Number(teclado()); para valor = parseFloat(prompt()) ou parseFloat(teclado()), pois a função prompt() retorna uma string e, para realizar a conversão correta para número de ponto flutuante, usamos parseFloat() em vez de Number(), para tornar o nome da varíavel mais compreensível. 