import { color, fonts, fontSize, size } from "../../theme"

export const container = () => ({
  height: size.moderateScale(55),
  marginBottom: size.moderateScale(3)
})

export const textInput = (error) => ({
  fontSize: fontSize.small,
  lineHeight: fontSize.small,
  color: color.black,
  backgroundColor: color.white,
  borderWidth: size.moderateScale(1),
  borderColor: error ? color.redColor : color.gray,
  borderRadius: size.moderateScale(10),
  paddingVertical: size.moderateScale(5),
  paddingHorizontal: size.moderateScale(10),
  height: size.moderateScale(40),
  shadowColor: color.black,
  shadowOffset: { width: 0, height: size.moderateScale(2) },
  shadowOpacity: size.moderateScale(0.1),
  shadowRadius: size.moderateScale(2),
  elevation: size.moderateScale(7),
})

export const errorTextView = () => ({
  position: 'absolute',
  bottom: size.moderateScale(2),
  width: '100%',
  paddingHorizontal: size.moderateScale(5)
})

export const errorText = () => ({
  fontSize: fontSize.littleSmall,
  color: color.redColor,
  fontFamily: fonts.sarabunMedium,
  lineHeight: fontSize.littleSmall,
})