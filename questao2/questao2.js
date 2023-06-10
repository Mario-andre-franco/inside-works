//Não entendi o exemplo e nem o porque do array estar ali, então crie um array ficticio para teste
const consumo = [
  [100, 150, 200, 120, 180, 160, 150, 140, 170, 190, 200, 180],
  [110, 160, 210, 130, 190, 170, 160, 150, 180, 200, 210, 190],
  [120, 170, 220, 140, 200, 180, 170, 160, 190, 210, 220, 200],
];

//nesse bloco faço a verificação dos meses e pego a média dividindo o total pelo array de consumo e deixo salvo em memoria usando o array consumoMedioMeses
const consumoMedioMeses = [];
for (let mes = 0; mes < 12; mes++) {
  let consumoTotalMes = 0;
  for (let ano = 0; ano < consumo.length; ano++) {
    consumoTotalMes += consumo[ano][mes];
  }
  const consumoMedio = consumoTotalMes / consumo.length;
  consumoMedioMeses.push(consumoMedio);
}

console.log("Consumo médio em cada mês dos anos 2010-2019:");
for (let mes = 0; mes < 12; mes++) {
  console.log(`Mês ${mes + 1}: ${consumoMedioMeses[mes]}`);
}


//aqui verifico em qual mes o consumo foi maior, se o array consumo contiver o ano e o mes que está rodando no for ele verifica se é maior que o marioConsumo que inicia em 0
let maiorConsumo = 0;
let mesMaiorConsumo = 0;
let anoMaiorConsumo = 2010;

for (let ano = 0; ano < consumo.length; ano++) {
  for (let mes = 0; mes < 12; mes++) {
    if (consumo[ano][mes] > maiorConsumo) {
      maiorConsumo = consumo[ano][mes];
      mesMaiorConsumo = mes + 1;
      anoMaiorConsumo = 2010 + ano;
    }
  }
}

console.log(`Mês/Ano com maior consumo: ${mesMaiorConsumo}/${anoMaiorConsumo}`);
