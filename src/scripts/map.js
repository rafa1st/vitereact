const coisas = ["coisa-0", "coisa-1","coisa-2", "coisa-3", "coisa-4"]

console.log(

  coisas.map(
    (items, key) => 
    `item = ${items}, chave = ${key}`     
  )
)


// função map recebe uma função, primeiro parametro é os itens do array, segunda é a chave de identificação;