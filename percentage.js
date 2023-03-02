/* 
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual 
de representação que cada estado teve dentro do valor total mensal da distribuidora. 

- total valor mensal
- 
*/

const values = [
    {
        "estado": "SP",
        "value": 67836.43
    },
    {
        "estado": "RJ",
        "value": 36678.66
    },
    {
        "estado": "MG",
        "value": 29229.88
    },
    {
        "estado": "ES",
        "value": 27165.48
    },
    {
        "estado": "Outros",
        "value": 19849.53
    },
];


let totalValueMensal = 0;
let contPositionEstado = 0;
let cont = [];

function averageValues(values) {
    values.forEach(val => {
        totalValueMensal = totalValueMensal + val.value
    })
}

function porcentoValor(values) {
    values.forEach(data => {
        
        counter = (data.value / totalValueMensal) * 100
        cont.push(counter)
    })
}

function main() {
    console.log("####################################################################")
    console.log("#################    BEM VINDO AO SISTEMA    #######################")
    console.log("####################################################################")
    console.log("____________________________________________________________________")
    console.log("Com base nos dados, o percentual de representação que cada estado")
    console.log("________teve de acordo com total mensal da distribuidora_________")
    console.log("____________________________________________________________________")
    console.log("____________________________________________________________________")

    averageValues(values);
    porcentoValor(values);

    console.log(totalValueMensal);
    console.log(`${values[0].estado} – Obteve ${cont[0].toFixed(0)}% de representação referente a media mensal.`);
    console.log(`${values[1].estado} – Obteve ${cont[1].toFixed(0)}% de representação referente a media mensal.`);
    console.log(`${values[2].estado} – Obteve ${cont[2].toFixed(0)}% de representação referente a media mensal.`);
    console.log(`${values[3].estado} – Obteve ${cont[3].toFixed(0)}% de representação referente a media mensal.`);
    console.log(`${values[4].estado} – Obteve ${cont[4].toFixed(0)}% de representação referente a media mensal.`);
}

main();