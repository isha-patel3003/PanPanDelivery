import React, { useRef } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated } from 'react-native';
import { color, fonts, fontSize, IcMotorBike, size } from '../../theme';

export const DemoScreen = () => {
  const pan = useRef(new Animated.Value(0)).current; // Animated value for the button position
  const blueBgWidth = useRef(0); // Use a ref to store the blue button width
  const yellowButtonWidth = size.moderateScale(200); // Width of the yellow button

  // Create a PanResponder to handle dragging
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 10; // Threshold to start dragging
      },
      onPanResponderMove: (_, gestureState) => {
        const { dx } = gestureState;

        // Calculate the new x position
        let newX = pan.__getValue() + dx; // Get current value of pan

        // Calculate the max position to keep the yellow button within the blue button's boundaries
        const maxRight = blueBgWidth.current - yellowButtonWidth; // Prevent going beyond right edge

        // Limit the newX position
        if (newX < 0) {
          newX = 0; // Don't go beyond the left edge
        } else if (newX > maxRight) {
          newX = maxRight; // Don't go beyond the right edge
        }

        Animated.timing(pan, {
          toValue: newX,
          duration: 0, // Set duration to 0 for instant update during pan
          useNativeDriver: true,
        }).start();
      },
      onPanResponderRelease: () => {
        // Optional: Handle logic on release, if needed
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <View
          style={styles.blueBg}
          onLayout={(event) => {
            blueBgWidth.current = event.nativeEvent.layout.width; // Store the blue background width
          }}
        >
          <Animated.View
            style={[styles.yellowBg, { transform: [{ translateX: pan }] }]} // Use Animated.View
            {...panResponder.panHandlers} // Attach the pan responder
          >
            <IcMotorBike fill={color.primary} width={size.moderateScale(30)} height={size.moderateScale(30)} />
            <Text style={styles.btnText}>Select Delivery</Text>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: size.moderateScale(20),
  },
  blueBg: {
    width: '100%',
    height: size.moderateScale(55),
    backgroundColor: color.primary,
    borderRadius: size.moderateScale(20),
    overflow: 'hidden', // Ensure child elements don't overflow the border radius
    position: 'relative', // Positioning context for absolute children
  },
  yellowBg: {
    position: 'absolute', // Use absolute positioning
    top: 0,
    height: '100%',
    width: size.moderateScale(200), // Set the width of the yellow button
    backgroundColor: color.secondary,
    borderRadius: size.moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: size.moderateScale(10),
  },
  btnText: {
    fontFamily: fonts.sarabunSemiBold,
    fontSize: fontSize.middleMedium,
    color: color.primary,
  },
});
