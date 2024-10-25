import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { RouteScreen } from '../../screens';

const Stack = createStackNavigator();


export const RouteStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
      <Stack.Screen component={RouteScreen} name='routeScreen' />
    </Stack.Navigator>
  )
}