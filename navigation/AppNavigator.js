import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ListPaymentsScreen from '../screen/ListPaymentsScreen';
import AddPaymentScreen from '../screen/AddPaymentScreen';

const PaymentsNavigator = createStackNavigator(
  {
    List: ListPaymentsScreen,
    Add: AddPaymentScreen,
  },
  {
    initialRouteName: 'Add',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#40b34f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(PaymentsNavigator);

export default AppContainer;
