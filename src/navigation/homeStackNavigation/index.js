import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '../../screens'

const Stack = createStackNavigator()

export const HomeStackNavigation = () => {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
      <Stack.Screen name='homeScreen' component={HomeScreen} />
    </Stack.Navigator>
  )
}
