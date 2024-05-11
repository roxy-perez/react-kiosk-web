export function formatMoney(amount = 0) {
  const formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  });
  return formatter.format(amount);
}