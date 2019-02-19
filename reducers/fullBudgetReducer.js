import { conbimeReducers, combineReducers } from 'redux';

const initialState = {
  payments: [],
  totalBalance: 0,
  totalToPay: 0,
  remainingDays: 0,
  balancePerDay: 0,
};

const paymentsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  payments: paymentsReducer,
});
