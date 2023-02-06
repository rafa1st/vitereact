const entrada = [
  {
    nota: {
        fornecedor: "Rafael",
        numero: 0,
        valor: 0,
    },
 },
  {
    boleto: {
      parcelas: 0,
      valorParcelas: [],
      vencimento: [],
    },
  },
];


console.log(entrada[0].nota.fornecedor)

entrada[1].boleto.parcelas = 3;
entrada[0].nota.valor = 300.00;

const dataInicial = new Date();

for (let i = 0; i < entrada[1].boleto.parcelas; i++) {
  let count = i;
  entrada[1].boleto.vencimento.push(dataInicial.getDay())
  
}

console.log(entrada[1].boleto.vencimento)


