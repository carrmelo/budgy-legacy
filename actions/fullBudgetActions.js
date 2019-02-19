export const getPayments = payload => ({
  type: 'GET_PAYMENTS',
  payload,
});

export const addPayment = payload => ({
  type: 'ADD_PAYMENT',
  payload,
});
