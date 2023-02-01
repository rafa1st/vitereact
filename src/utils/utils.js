export const convertCurrency = (v) => {
    const valor = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(v);
    return valor;
  };