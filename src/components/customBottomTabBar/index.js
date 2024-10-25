import React, { useEffect, useState } from 'react'
import { Animated, Keyboard, Text, TouchableOpacity } from 'react-native';

import { color, IcChat, IcHome, IcProfile, IcRoute, IcWallet, size} from '../../theme';
import { useMainContext } from '../../context';
import * as styles from './styles'



export const CustomBottomTabBar = ({state, descriptors, navigation}) => {

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const { setBottomBarHeight } = useMainContext();

  useEffect(() => {
    // Listeners for keyboard show and hide events
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <Animated.View style={[
      styles.mainBottomContainer(),
      { 
        display: isKeyboardVisible ? 'none' : 'flex' 
      }
    ]}>
    {
      state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = 
        options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        let Icon;
        if(route.name == 'homeStackNavigation'){
          Icon = state.index === index ? (<IcHome stroke={color.secondary} />) : <IcHome  />;
        }
        if(route.name == 'walletStackNavigation'){
          Icon = state.index === index ? <IcWallet fill={color.secondary} /> : <IcWallet />;
        }
        else if(route.name == 'chatStackNavigation'){
          Icon = state.index === index ? <IcChat fill={color.secondary} color={color.secondary} /> : <IcChat />;
        }
        else if(route.name == 'routeStackNavigation'){
          Icon = state.index === index ? <IcRoute fill={color.secondary} /> : <IcRoute />;
        }
        else if(route.name == 'profileStackNavigation'){
          Icon = state.index === index ? <IcProfile fill={color.secondary} /> : <IcProfile />;
        }
        
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const onContentLayout =  (event) => {
          const { height } = event.nativeEvent.layout;
          setBottomBarHeight(height);
        }


        return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.bottomBarItem()}
              key={route.key + index.toString()}
              onLayout={onContentLayout}
            >
              {Icon}
              <Text style={styles.screenLabel(isFocused)}>{label}</Text>
            </TouchableOpacity>
        )
      })
    }
    </Animated.View >
  )
}