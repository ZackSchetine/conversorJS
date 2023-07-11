/*  Utilize Node no terminal para iniciar aplicação. É um requisito ter node e express instalado */
let teclado = require('prompt-sync')();
// módulo ('prompt-sync') para receber entradas e ler pelo terminal

const bordas = require('./bordas');
const convDistancia = require('./conversorDistancia');
const convTemperatura = require('./conversorTemperatura');
let opcao = 0;

//Display do menu principal
function menuPrincipalDisplay() {
    bordas(0);
    console.log("|            Menu principal             |");
    bordas(2);
    console.log("|Escolha uma das seguintes opções:      |");
    console.log("|1 - Conversão de distâncias            |");
    console.log("|2 - Conversão de temperaturas          |");
    console.log("|3 - Fechar o programa                  |");
    bordas(1);
}

//Menu principal
function menuPrincipal() {
    do {
        menuPrincipalDisplay();
        opcao = parseInt(teclado());
        switch (opcao) {
            case 1:
                convDistancia();
                break;

            case 2:
                convTemperatura();
                break;

            case 3:
                bordas(0);
                console.log("|          Saindo do programa           |");
                bordas(1);
                break;

            default:
                bordas(0);
                console.log("|            Opção inválida             |");
                bordas(1);
        }
    } while (opcao != 3);
}

menuPrincipal();