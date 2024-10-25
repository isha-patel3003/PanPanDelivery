import { color, fonts, fontSize, size } from "../../theme"

export const button = () => ({
  height: size.moderateScale(60),
  width: '100%',
  backgroundColor: color.secondary,
  borderRadius: size.moderateScale(10),
})

export const animatedButtonView = () => ({
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: size.moderateScale(10),
  height: '100%',
})

export const gradientBtn = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: size.moderateScale(10),
  height: '100%',
  width: '100%',
  gap: size.moderateScale(10)
})

export const btnText = () => ({
  fontFamily: fonts.sarabunSemiBold,
  fontSize: fontSize.small,
  color: color.secondary,
})

export const iconView = () => ({
  height: size.moderateScale(30),
  width: size.moderateScale(30),
  alignItems: 'center',
  justifyContent: 'center',
})