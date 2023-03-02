/* 
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, 
    na linguagem que desejar, 
        1- que calcule e retorne:
            • O menor valor de faturamento ocorrido em um dia do mês;
            • O maior valor de faturamento ocorrido em um dia do mês;
            • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

    IMPORTANTE:
    a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
    b) Podem existir dias sem faturamento, como nos finais de semana e feriados. 
    Estes dias devem ser ignorados no cálculo da média;
*/

const data = require("./dados.json");

let totalValue = 0;
let averageValue = 0;
let highestValue = 0;
let lowestValue = undefined;
let dayHighestValue = 0;

function generateReport(data) {

    data.forEach(fat => {
        totalValue = totalValue + fat.valor;
    
        averageValue =  totalValue / data.length
        
        /* Maior valor de faturamento */
        if (fat.valor > highestValue) {
            highestValue = fat.valor;
        }
        
        /* menor valor de faturamento */
        if (lowestValue === undefined) {
            lowestValue = fat.valor
        } else {
            if(fat.valor < lowestValue && fat.valor != 0) {
                lowestValue = fat.valor
            }
        }
    
    });
}

function generateAverage(data) {
    data.forEach(fat => {
        /* faturamento diário foi superior à média mensal */
        if(fat.valor > averageValue) {
            dayHighestValue = dayHighestValue + 1
        }
    });
}

function main() {
    console.log("####################################################################")
    console.log("#################    BEM VINDO AO SISTEMA    #######################")
    console.log("####################################################################")
    
    generateReport(data);
    generateAverage(data);

    console.log("#################      RELATÓRIO FINAL       ########################")
    console.log(`O menor valor de faturamento ocorrido em um dia do mês ${lowestValue.toFixed(2)}`)
    console.log(`O maior valor de faturamento ocorrido em um dia do mês ${highestValue.toFixed(2)}`)
    console.log(`Total de dias no mês em que o valor de faturamento diário foi superior à média mensal. ${dayHighestValue}`)
};

main();
