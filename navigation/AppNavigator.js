import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ListPaymentsScreen from '../screen/ListPaymentsScreen';
import AddPaymentScreen from '../screen/AddPaymentScreen';

const PaymentsNavigator = createStackNavigator(
  {
    List: { screen: ListPaymentsScreen },
    Add: { screen: AddPaymentScreen },
  },
  { initialRouteName: 'Add' },
);

const AppNavigator = createAppContainer(PaymentsNavigator);

export default AppNavigator;
