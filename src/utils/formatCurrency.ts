export const formatCurrency = (amount: string) => {
  return parseFloat(amount).toLocaleString('en-ng', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  });
};
