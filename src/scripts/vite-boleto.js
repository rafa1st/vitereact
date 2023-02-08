const entrada = {
    fornecedor: "",
    nota: 0,
    valor: 0,
    data: "",
    parcelas: 0,
    valorParcelas: [],
    vencimentos: [],

}


entrada.parcelas = 3;
entrada.fornecedor = "fornecedor";
entrada.nota = 303322;
entrada.valor = 150;
entrada.data = "2023-02-08";
entrada.vencimentos.push("2023-02-15")
const data = new Date(entrada.data)

console.log(entrada)
console.log(new Intl.DateTimeFormat("pt-BR").format(data))
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date(entrada.vencimentos[0])))

