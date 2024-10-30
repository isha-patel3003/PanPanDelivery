import { color, fonts, fontSize, size } from "../../theme"

export const mainView = () => ({
  flex: 1,
})

export const header = () => ({
  backgroundColor: color.primary
})

export const headerTitle = () => ({
  color: color.secondary,
})

export const cardWrapper = () => ({
  flex: 1,
  padding: size.moderateScale(10),
  gap: size.moderateScale(10)
})

export const centerTextView = () => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
})

export const centerText = () => ({
  color: color.primary,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunSemiBold
})

export const card = () => ({
  paddingHorizontal: size.moderateScale(10),
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.mostlyWhite,
  borderRadius: size.moderateScale(8),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: size.moderateScale(10)
})

export const iconView = () => ({
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.white,
  width: size.moderateScale(40),
  height: size.moderateScale(40),
  borderRadius: size.moderateScale(30),
})

export const cardDetails = () => ({
  flex: 1,
  gap: size.moderateScale(8)
})

export const cardHeader = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const trackingID = () => ({
  color: color.black,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunSemiBold
})

export const dateText = () => ({
  color: color.black,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunSemiBold,
  lineHeight: fontSize.verySmall,
})

export const cardBody = () => ({
  gap: size.moderateScale(3)
})

export const cardText = () => ({
  color: color.accentGrayColor,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunSemiBold,
  lineHeight: fontSize.verySmall,
})