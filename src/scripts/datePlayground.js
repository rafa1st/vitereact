const data = new Date();
console.log(data)

const mes = 12;
const dia = 31;
const ano = 1981;

const dataformat = new Intl.DateTimeFormat("pt-BR").format(data);

const newdata = new Date(`${ano}-${mes}-${dia}`)

newdata.toLocaleDateString("pt-BR");


data.setDate(data.getDate() + 15)
data.getUTCDate();

console.log(data)


