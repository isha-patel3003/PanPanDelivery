import React, { useState, useEffect, useRef } from 'react';
import { Animated, TouchableOpacity, StyleSheet } from 'react-native';

import * as styles from './styles'
import { color } from '../../theme';

export const Switch = ({
  value,         
  onValueChange = () => {},  
  inactiveTrackColor = color.grayLight,    
  activeThumbColor = color.success, 
  activeTrackColor = color.secondary,
  inactiveThumbColor = color.redColor,
  thumbSize = 25,        
  switchWidth = 58,       
  switchHeight = 30,
  duration = 300, 
}) => {

  const [isEnabled, setIsEnabled] = useState(value);
  const translateX = useRef(new Animated.Value(isEnabled ? switchWidth - thumbSize - 8 : 0)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isEnabled ? switchWidth - thumbSize - 8 : 0,
      duration,
      useNativeDriver: true,
    }).start();
  }, [isEnabled]);

  const toggleSwitch = () => {
    setIsEnabled(prev => !prev);
    onValueChange(!isEnabled);
  };

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isEnabled ? 30 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isEnabled]);

  return (
    <TouchableOpacity 
      activeOpacity={1}
      style={[
        styles.switchContainer(
          switchWidth, 
          switchHeight, 
          isEnabled ? activeTrackColor : inactiveTrackColor, 
        ),
      ]} 
      onPress={toggleSwitch}
    >
      <Animated.View
        style={[
          styles.thumb(thumbSize, isEnabled ?  activeThumbColor : inactiveThumbColor),
          {
            transform: [{ translateX }],
          },
        ]}
      />
    </TouchableOpacity>
  );
};


