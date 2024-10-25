import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { ProfileScreen } from '../../screens';

const Stack = createStackNavigator();

export const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
      <Stack.Screen component={ProfileScreen} name='profileScreen' />
    </Stack.Navigator>
  )
}
