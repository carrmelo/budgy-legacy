import { combineReducers } from 'redux';

const initialState = {
  payments: [],
  totalBalance: 0,
  totalToPay: 0,
  remainingDays: 0,
  balancePerDay: 0,
};

const paymentsReducer = (state = initialState, action) => {
  console.log('HEEEEYYYY');
  console.log(state, action);

  switch (action.type) {
    case 'GET_PAYMENTS':
      return { ...state, payments: [...action.payload] };
    default:
      return state;
  }
};

export default combineReducers({
  fullBudget: paymentsReducer,
});
