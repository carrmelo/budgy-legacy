export const getPayments = payload => ({
  type: 'GET_PAYMENTS',
  payload,
});

export const addPayment = payload => ({
  type: 'ADD_PAYMENT',
  payload,
});

export const deletePayment = id => ({
  type: 'DELETE_PAYMENT',
  id,
});
