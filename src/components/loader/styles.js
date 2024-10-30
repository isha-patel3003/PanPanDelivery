import { color, size } from "../../theme";

export const mainView = (bgColor) => ({
  position: 'absolute',
  backgroundColor: bgColor ?? color.redColor, 
  zIndex: 100,
  justifyContent: 'center',
  alignItems: 'center',
  height: size.deviceHeight,
  width: size.deviceWidth,
  transform: [{scale: 2}],
  top: size.moderateScale(-30)
});

export const lottieImage = () => ({
  height: size.moderateScale(50),
  width: size.moderateScale(70),
  position: 'absolute',
  alignSelf: 'center',
  justifyContent: 'center',
});