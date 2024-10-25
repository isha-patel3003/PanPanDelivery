import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { LoginScreen, OTPScreen, RegisterScreen } from '../../screens';


const AuthStack = createStackNavigator();

export const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
      <AuthStack.Screen component={LoginScreen} name='loginScreen'/>
      <AuthStack.Screen component={OTPScreen} name='otpScreen'/>
      <AuthStack.Screen component={RegisterScreen} name='registerScreen'/>
    </AuthStack.Navigator>
  )
}