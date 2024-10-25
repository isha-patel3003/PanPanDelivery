// SwipeButton Component
import React, { useRef } from 'react';
import { View, PanResponder, Text, Animated, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as styles from './styles';
import { color, size } from '../../theme';

const buttonWidth = size.moderateScale(200);
const containerWidth = size.deviceWidth - 40;

export const SwipeButton = React.forwardRef(({
  gradientColors,
  gradientLocations,
  icon,
  renderIcon,
  title,
  onSwipeSuccess,
}, ref) => {
  const defaultColors = [color.black, color.primary];
  const defaultLocations = [0.1, 0.9];

  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const newTranslateX = gestureState.dx;
        const maxRightBound = containerWidth - buttonWidth;
        const clampedX = Math.max(0, Math.min(newTranslateX, maxRightBound));
        
        translateX.setValue(clampedX);
      },
      onPanResponderRelease: (evt, gestureState) => {
        const swipeThreshold = buttonWidth / 2;
        const maxRightBound = containerWidth - buttonWidth;

        if (gestureState.dx > swipeThreshold) {
          Animated.timing(translateX, {
            toValue: maxRightBound,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            if (onSwipeSuccess) {
              onSwipeSuccess();
            }
          });
        } else {
          resetButton(); // Reset button on release
        }
      },
    })
  ).current;

  // Reset button function
  const resetButton = () => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  // Expose resetButton function to parent
  React.useImperativeHandle(ref, () => ({
    resetButton,
  }));

  return (
    <View style={[styles.button(), { width: containerWidth }]}>
      <Animated.View
        style={[
          styles.animatedButtonView(),
          {
            width: buttonWidth,
            transform: [{ translateX }],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <LinearGradient
          colors={gradientColors ?? defaultColors}
          locations={gradientLocations ?? defaultLocations}
          style={styles.gradientBtn()}
          useAngle={true}
          angle={90}
        >
          {icon && <View style={styles.iconView()}>{renderIcon()}</View>}
          <Text style={styles.btnText()}>{title}</Text>
        </LinearGradient>
      </Animated.View>
    </View>
  );
});
