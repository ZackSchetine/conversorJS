function validarNumero(valor) {
    if (isNaN(valor)) {
        return console.log("Entrada inválida, por favor informe apenas dados numéricos");
    } else {
        return valor;
    }
}

module.exports = validarNumero;