import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';

import { Screen } from '../../components';
import { color, images } from '../../theme';
import { styles } from './styles';

export const SplashScreen = () => {
  const translateY = useRef(new Animated.Value(0)).current;

  const startBouncing = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -30,
          duration: 800,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0, 
          duration: 800,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    startBouncing();
  }, [translateY]);

  return (
    <Screen translucent={true} bgColor={color.white}>
      <View style={styles.container}>
        <Animated.Image
          source={images.appLogo}
          style={[styles.logo, { transform: [{ translateY }] }]}
        />
      </View>
    </Screen>
  );
};
