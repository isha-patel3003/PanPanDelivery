import { color, fonts, fontSize, size } from "../../theme"

export const mainContainer = () => ({
  flex: 1,
})

export const mainView = () => ({
  flex: 1,
})

export const header = () => ({
  backgroundColor: color.primary,
  gap: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(10),
  paddingVertical: size.moderateScale(5)
})

export const headerText = () => ({
  color: color.secondary,
  textAlign: 'center'
})

export const middleView = () => ({
  padding: size.moderateScale(20)
})

export const imageWrapper = () => ({
  paddingVertical: size.moderateScale(10),
  alignItems: 'center',
  justifyContent: 'center',
})

export const imageCenterView = () => ({
  width: size.moderateScale(100),
  height: size.moderateScale(100),
  borderRadius: size.moderateScale(80),
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
})

export const image = () => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  borderRadius: size.moderateScale(80),
})

export const bottomView = () => ({
  paddingVertical: size.moderateScale(10)
})

export const formView = () => ({
  paddingVertical: size.moderateScale(10),
  marginHorizontal: size.moderateScale(10),
  backgroundColor: color.mostlyWhite,
  borderRadius: size.moderateScale(15)
})

export const row = () => ({
  marginHorizontal: size.moderateScale(10),
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomWidth: size.moderateScale(1),
  borderBottomColor: color.grayLight,
  paddingVertical: size.moderateScale(8),
})

export const label = () => ({
  color: color.tertiaryTextColor,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunSemiBold,
  width: size.moderateScale(120),
})

export const colonText = () => ({
  width: size.moderateScale(10),
  alignItems: 'center',
  justifyContent: 'center',
  color: color.primary,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunSemiBold,
  height: '100%',
  verticalAlign: 'middle',
})

export const value = () => ({
  flex: 1,
  color: color.primary,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunSemiBold,
})