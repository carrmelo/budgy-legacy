export default function(amount) {
  const options = {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  };
  // for a whole amount, leave off the .00
  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat('es-ES', options);
  return formatter.format(amount / 100);
}
