import { color, fontSize, fonts, size } from "../../theme";

export const mainBottomContainer = () => ({
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: size.moderateScale(70),
  backgroundColor: color.primary,
  elevation: size.moderateScale(10),
  shadowColor: color.white,
  borderTopWidth: size.moderateScale(1),
  borderTopColor: color.primary,
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  width: size.deviceWidth,
})

export const bottomBarItem = () => ({
  alignItems: 'center',
  justifyContent: 'center',
})

export const screenLabel = (isFocused) => ({
  color: isFocused ? color.secondary : color.white,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunMedium,
})