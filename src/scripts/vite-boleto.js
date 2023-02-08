const entrada = {
  fornecedor: "",
  nota: 0,
  valor: 0,
  data: "",
  parcelas: 0,
  dataEntrada: "",
  valorParcelas: [],
  vencimentos: [],
  prazo: 0,
};

//entrada de valores primarios
entrada.parcelas = 3;
entrada.fornecedor = "Novo Fornecedor";
entrada.nota = 303322;
entrada.valor = 150;
entrada.data = "2023-02-08";
entrada.dataEntrada = "2023-02-15";
entrada.prazo = 15;


// gerador de parcelas
const gerador = (entrada) => {
  const inicial = new Date(entrada.dataEntrada);
  inicial.setUTCHours(3);
  entrada.vencimentos.push(inicial.toISOString().slice(0,10));

  for (let i = 0; i < entrada.parcelas; i++) {
    inicial.setDate(inicial.getDate() + entrada.prazo);
    entrada.valorParcelas.push(entrada.valor / entrada.parcelas);
    entrada.vencimentos.push(inicial.toISOString().slice(0,10));
  }

  return entrada.vencimentos.pop();
};

gerador(entrada);

//conversões *ver se necessário*

//saida final
console.log(entrada);
