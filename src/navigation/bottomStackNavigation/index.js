import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CustomBottomTabBar } from '../../components'
import { HomeStackNavigation } from '../homeStackNavigation'
import { RouteStackNavigation } from '../routeStackNavigation'
import { ChatStackNavigation } from '../chatStackNavigation'
import { ProfileStackNavigation } from '../profileStackNavigation'
import { WalletStackNavigation } from '../walletStackNavigation'
import { LocalizationContext, useMainContext } from '../../context'

const Tab = createBottomTabNavigator()

export const BottomStackNavigation = () => {

  const { t } = useContext(LocalizationContext);
  const { isBottomSheetVisible } = useMainContext();

  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTabBar {...props}/>} 
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: isBottomSheetVisible ? 'none' : 'flex',
        },
      }}
    >
      <Tab.Screen 
        name='homeStackNavigation' 
        component={HomeStackNavigation} 
        options={{
          tabBarLabel: t('bottom_stack.home_screen_label'),
        }}
      />
      <Tab.Screen 
        name='walletStackNavigation'
        component={WalletStackNavigation}
        options={{
          tabBarLabel: t('bottom_stack.wallet_screen_label')
        }}
      />
      <Tab.Screen 
        name='routeStackNavigation' 
        component={RouteStackNavigation} 
        options={{
          tabBarLabel: t('bottom_stack.route_screen_label')
        }}
      />
      <Tab.Screen 
        name='chatStackNavigation' 
        component={ChatStackNavigation} 
        options={{
          tabBarLabel: t('bottom_stack.chat_screen_label')
        }}
      />
      <Tab.Screen 
        name='profileStackNavigation' 
        component={ProfileStackNavigation} 
        options={{
          tabBarLabel: t('bottom_stack.profile_screen_label')
        }}
      />
    </Tab.Navigator>
  )
}
