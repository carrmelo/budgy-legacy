export default function(amount) {
  const options = {
    minimumFractionDigits: 2,
  };
  const formatter = new Intl.NumberFormat('es-ES', options);
  return formatter.format(amount / 100);
}
