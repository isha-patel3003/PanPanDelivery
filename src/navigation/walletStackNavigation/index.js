import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { TransactionScreen } from '../../screens';

const Stack = createStackNavigator();

export const WalletStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
      <Stack.Screen component={TransactionScreen} name='transactionScreen' />
    </Stack.Navigator>
  )
}
