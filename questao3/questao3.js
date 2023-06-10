const dadosPagamentPorEmpresa = [
    ["F", "01/05/2022", 0],
    ["A", "03/04/2022", 1],
    ["C", "04/04/2022", 1],
    ["A", "06/06/2022", 1],
    ["B", "20/06/2022", 0],
    ["B", "21/06/2022", 0],
    ["I", "01/05/2022", 1],
    ["I", "03/04/2022", 0],
    ["F", "04/04/2022", 1],
    ["F", "06/06/2022", 0],
    ["A", "20/06/2022", 0],
    ["C", "21/06/2022", 0],
    ["C", "12/03/2022", 1],
    ["C", "14/07/2022", 1],
    ["C", "15/07/2022", 1],
    ["B", "12/07/2022", 0],
    ["I", "15/07/2022", 1],
    ["I", "16/06/2022", 1],
    ["A", "10/05/2022", 0],
    ["B", "12/03/2022", 1]
];

const dadosPagamentPorEmpresaPorEmpresa = {};

//desustrurei para poder obter os indices empresa, a data e o status e 'salvei' no obj dadosPagamentPorEmpresaPorEmpresa
dadosPagamentPorEmpresa.forEach(([empresa, _, pagamento]) => {
    if (!dadosPagamentPorEmpresaPorEmpresa[empresa]) {
        dadosPagamentPorEmpresaPorEmpresa[empresa] = { total: 0, count: 0 };
    }
    dadosPagamentPorEmpresaPorEmpresa[empresa].total += pagamento;
    dadosPagamentPorEmpresaPorEmpresa[empresa].count++;
});

//aqui apenas fazendo as medias para cada objeto
const ranking = Object.entries(dadosPagamentPorEmpresaPorEmpresa)
    .map(([empresa, { total, count }]) => ({ empresa, media: total / count }))
    .sort((a, b) => b.media - a.media);

console.log("Ranking de Bons Pagadores:");
ranking.forEach((item, index) => {
    console.log(`${index + 1}. Empresa ${item.empresa}: Média ${item.media}`);
});
