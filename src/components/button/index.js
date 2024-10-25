import React, { useState, useEffect, useRef } from 'react';
import { Animated, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import * as styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { color } from '../../theme';

export const Button = ({
  title,
  onPress,
  btnStyle,
  btnTextStyle,
  disabled,
  icon,
  renderIcon,
  linearGradientButton,
  gradientColors,
  gradientLocations,
}) => {

  const [isDisabled, setIsDisabled] = useState(disabled);
  const defaultColors = [color.black, color.primary];
  const defaultLocations = [0, 1];

  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95, 
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const resetScale = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    if (!isDisabled && onPress) {
      resetScale()
      onPress();
    }
  };

  useEffect(() => {
    setIsDisabled(disabled);

    return () => {
      resetScale();
    };
  }, [disabled]);

  if (linearGradientButton) {
    return (
      <TouchableWithoutFeedback
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={isDisabled}
        style={[styles.linearGradientButton(), { opacity: isDisabled ? 0.5 : 1 }]}
      >
        <Animated.View style={[{ transform: [{ scale: scaleValue }] }]}>
        <LinearGradient
          colors={gradientColors || defaultColors}
          locations={gradientLocations || defaultLocations}
          useAngle={true}
          angle={90}
          style={[styles.linearGradient(), btnStyle]}
        >
           {
            icon && renderIcon
              ? renderIcon()
              : null
          }
          <Text style={[styles.lGBtntitleStyle(isDisabled), btnTextStyle]}>{title}</Text>
        </LinearGradient>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <TouchableWithoutFeedback
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
        disabled={isDisabled}
        style={[styles.btnContainer(isDisabled), btnStyle]}
      >
        <Animated.View style={[{ transform: [{ scale: scaleValue }] }, styles.btnContainer(isDisabled), btnStyle]}>
        {
          icon && renderIcon
            ? renderIcon()
            : null
        }
        <Text style={[styles.titleStyle(disabled), btnTextStyle]}>{title}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
};
