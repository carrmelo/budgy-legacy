import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ListPaymentsScreen from '../screen/ListPaymentsScreen';
import AddPaymentScreen from '../screen/AddPaymentScreen';

const PaymentsNavigator = createStackNavigator(
  {
    List: ListPaymentsScreen,
    Add: AddPaymentScreen,
  },
  { initialRouteName: 'List' },
);

const AppContainer = createAppContainer(PaymentsNavigator);

export default AppContainer;
