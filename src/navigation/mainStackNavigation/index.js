import React, { useEffect, useState } from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo'

import { DeliveryScreen, DeliveryStatusScreen, DemoScreen, OrderScreen, PickupProofScreen, QRCodeScannerScreen, ShipmentDetailsScreen, SplashScreen, UserDetailsScreen } from '../../screens';
import { useMainContext } from '../../context';
import { AuthStackNavigation } from '../authStackNavigation';
import { BottomStackNavigation } from '../bottomStackNavigation';


const Stack = createStackNavigator();

export const MainStackNavigation = () => {

  const userIsLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [showSplashScreen, setHideSplashScreen] = useState(true);

  const { setInternetConnectivity } = useMainContext()

  const handleConnectionChange = (state) => {
    return state;
  };

  useEffect(() => {
    const checkConnection = async () => {
      const state = await NetInfo.fetch();
      handleConnectionChange(state);
      setInternetConnectivity(state.isConnected);
    };

    checkConnection();

    const unsubscribe = NetInfo.addEventListener(handleConnectionChange);

    return () => {
      unsubscribe();
    };
  }, []);
 

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setHideSplashScreen(false);
    }, 3000);

    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        {
          showSplashScreen && (
            <Stack.Screen component={SplashScreen} name='splashScreen' />
          )
        }
        {
          userIsLoggedIn
          ? (
            <Stack.Screen component={BottomStackNavigation} name='bottomStackNavigation' />
          )
          : ( 
            <Stack.Screen component={AuthStackNavigation} name='authStackNavigation' />
          )
        }
        <Stack.Screen component={QRCodeScannerScreen} name='qrCodeScannerScreen' />
        <Stack.Screen component={UserDetailsScreen} name='userDetailsScreen' />
        <Stack.Screen component={DeliveryStatusScreen} name='deliveryStatusScreen' />
        <Stack.Screen component={ShipmentDetailsScreen} name='shipmentDetailsScreen' />
        <Stack.Screen component={PickupProofScreen} name='pickupProofScreen' />
        <Stack.Screen component={OrderScreen} name='orderScreen' />
        <Stack.Screen component={DeliveryScreen} name='deliveryScreen' />
      </Stack.Navigator>
    </NavigationContainer>
  )
}