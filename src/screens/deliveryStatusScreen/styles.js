import { color, fonts, fontSize, size } from "../../theme"

export const mainView = () => ({
  flex: 1,
})

export const header = () => ({
  backgroundColor: color.primary
})

export const headerTitle = () => ({
  color: color.secondary,
  fontSize: fontSize.middleMedium,
})

export const cardWrapper = () => ({
  flex: 1,
  padding: size.moderateScale(10),
})

export const card = () => ({
  padding: size.moderateScale(5),
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
})

export const trackingID = () => ({
  color: color.black,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunSemiBold
})

export const dateText = () => ({
  color: color.black,
  fontSize: fontSize.littleSmall,
  fontFamily: fonts.sarabunSemiBold
})

export const cardBody = () => ({
  gap: size.moderateScale(5)
})

export const cardText = () => ({
  color: color.tertiaryTextColor,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunSemiBold,
  lineHeight: fontSize.verySmall,
})