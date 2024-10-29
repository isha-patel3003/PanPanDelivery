import React, { useState, useEffect, useRef } from 'react';
import { Animated, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import * as styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { color } from '../../theme';

export const Button = ({
  title,
  onPress,
  btnStyle = {},
  btnTextStyle = {},
  disabled = false,
  icon,
  renderIcon,
  linearGradientButton = false,
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
      resetScale();
      onPress();
    }
  };

  useEffect(() => {
    setIsDisabled(disabled);
    return () => {
      resetScale();
    };
  }, [disabled]);

  const commonStyle = {
    ...btnStyle,
    opacity: isDisabled ? 0.5 : 1,
  };

  const content = (
    <>
      {icon && renderIcon ? renderIcon() : null}
      <Text style={[styles.titleStyle(isDisabled), btnTextStyle]}>{title}</Text>
    </>
  );

  if (linearGradientButton) {
    return (
      <TouchableWithoutFeedback
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={isDisabled}
      >
        <Animated.View style={[commonStyle, { transform: [{ scale: scaleValue }] }]}>
          <LinearGradient
            colors={gradientColors || defaultColors}
            locations={gradientLocations || defaultLocations}
            useAngle={true}
            angle={90}
            style={[styles.linearGradient(), commonStyle]}
          >
            {content}
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
      >
        <Animated.View style={[commonStyle, styles.btnContainer(isDisabled), { transform: [{ scale: scaleValue }] }]}>
          {content}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
};
