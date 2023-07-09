/*  Utilize Node no terminal para iniciar aplicação. É um requisito ter node e express instalado */
let teclado = require('prompt-sync')();
// módulo ('prompt-sync') para receber entradas e ler pelo terminal

let opcao = 0;
let opcaoInterna = 0;
let valor = 0;

//Display do menu principal
function menuPrincipalDisplay() {
    console.log("\nMenu principal");
    console.log("\nEscolha uma das seguintes opções:");
    console.log("1 - Conversão de distâncias");
    console.log("2 - Conversão de temperaturas");
    console.log("3 - Fechar o programa");
}

//Display do menu de distâncias 
function menuConvDistDisplay() {
    console.log("\nMenu conversão de distâncias");
    console.log("\nEscolha uma das seguintes opções:");
    console.log("1 - Quilômetro(km) para milha(mi)");
    console.log("2 - Milha(mi) para quilômetro(km)");
    console.log("3 - Voltar a tela inicial");
}

//Display do menu de temperaturas 
function menuConvTempDisplay() {
    console.log("\nMenu conversão de temperatura");
    console.log("\nEscolha uma das seguintes opções:");
    console.log("1 - Celsius(C) para fahrenheit(F)");
    console.log("2 - Fahrenheit(F) para celsius(C)");
    console.log("3 - Voltar a tela inicial");
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
                convTemperaturas();
                break;

            case 3:
                console.log("\nSaindo do programa");
                break;

            default:
                console.log("Opção inválida");
        }
    } while (opcao != 3);
}

//Menu de conversão de distâncias
function convDistancia() {
    const number = 1.609344;
    do {
        menuConvDistDisplay();
        opcaoInterna = parseInt(teclado());
        switch (opcaoInterna) {
            case 1:
                //km para mi
                console.log("\nInforme o valor a ser convertido: ");
                valor = parseFloat(teclado());
                const kilometersToMiles = (valor / number).toFixed(2);
                console.log(`${valor}km é igual a ${kilometersToMiles}mi`);
                break;

            case 2:
                //mi para km
                console.log("\nInforme o valor a ser convertido: ");
                valor = parseFloat(teclado());
                const milesToKilometers = (valor * number).toFixed(2);
                console.log(`${valor}mi é igual a ${milesToKilometers}km`);
                break;

            case 3:
                console.log("\nVoltando a tela inicial");
                break;

            default:
                console.log("\nOpção inválida");
        }
    } while (opcaoInterna != 3);
}

//Menu de conversão de massas



//Menu de conversão de temperaturas
function convTemperaturas() {
    do {
        menuConvTempDisplay();
        opcaoInterna = parseInt(teclado());
        switch (opcaoInterna) {
            case 1:
                //C para F
                console.log("\nInforme o valor a ser convertido: ");
                valor = parseFloat(teclado());
                const celsiusToFahrenheit = ((valor * 9 / 5) + 32).toFixed(2);
                console.log(`${valor}C é igual a ${celsiusToFahrenheit}F`);
                break;

            case 2:
                //F para C
                console.log("\nInforme o valor a ser convertido: ");
                valor = parseFloat(teclado());
                const fahrenheitToCelsius = ((valor - 32) * 5 / 9).toFixed(2);
                console.log(`${valor}F é igual a ${fahrenheitToCelsius}C`);
                break;

            case 3:
                console.log("\nVoltando a tela inicial");
                break;

            default:
                console.log("\nOpção inválida");
        }
    } while (opcaoInterna != 3);
}

menuPrincipal();

