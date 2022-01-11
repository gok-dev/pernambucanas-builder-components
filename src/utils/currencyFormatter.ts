export const currencyFormatter = (amount: number) => {
  return parseFloat(amount.toString()).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  })
}
