/********************************************************************
 * Objetivo: Arquivos de funções paraa realizar calculos matematicos
 * Data: 03/02/2023
 * Autora: Layla
 * Versão: 1.0
*********************************************************************/

//Realizar calculos matemáticos para realizar as 4 operações (SOMAR, SUBTRAIR, DIVIDIR, MULTIPLICAR)
function calcular(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();

    let resultado;

    if (operacao == 'SOMAR') {
        resultado = valor1 + valor2;
    } else if (operacao == 'SUBTRAIR') {
        resultado = valor1 - valor2;
    } else if (operacao == 'MULTIPLICAR') {
        resultado = valor1 * valor2;
    } else if (operacao == 'DIVIDIR') {
        if (valor2 == 0) {
            console.log('ERRO: Não foi possível fazer uma divisão por zero')
        }
        resultado = valor1 / valor2;
    } else {
        console.log('ERRO: A operação informada não é válida, confira a sua entrada. \n')
        entradaDados.close();
    }

    //validação para tratar a variável resultado quando nenhum calculo é realizado
    if (resultado != undefined)
        return resultado;
    else {
        return false
    }

};

function validarValores() {

}

module.exports = {
    calcular
}
