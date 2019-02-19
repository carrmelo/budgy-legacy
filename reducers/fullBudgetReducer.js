import { combineReducers } from 'redux';

const initialState = {
  payments: [],
  totalBalance: 0,
  totalToPay: 0,
  remainingDays: 0,
  balancePerDay: 0,
};

const paymentsReducer = (state = initialState, action) => {
  console.log(state.payments, action.payload);

  switch (action.type) {
    case 'GET_PAYMENTS':
      return { ...state, payments: [...action.payload] };
    case 'ADD_PAYMENT':
      return { ...state, payments: [...state.payments, action.payload] };
    case 'DELETE_PAYMENT':
      return {
        ...state,
        payments: state.payments.filter(payment => payment._id !== action.id),
      };
    default:
      return state;
  }
};

export default combineReducers({
  fullBudget: paymentsReducer,
});
