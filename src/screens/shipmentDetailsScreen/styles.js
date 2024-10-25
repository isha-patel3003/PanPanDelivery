import { color, fonts, fontSize, size } from "../../theme"

export const screen = () => ({
  flexGrow: 1,
})

export const mainView = () => ({
  flex: 1,
})

export const header = () => ({
  backgroundColor: color.primary,
  paddingVertical: size.moderateScale(5)
})

export const headerTitle = () => ({
  color: color.secondary,
  fontSize: fontSize.middleMedium,
  textAlign: 'center'
})

export const topView = () => ({
  
})

export const trackingId = () => ({
  color: color.primary,
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.sarabunSemiBold,
  textAlign: 'center',
})

export const addressWrapper = () => ({
  paddingVertical: size.moderateScale(10),
  borderBottomWidth: size.moderateScale(1),
  borderBottomColor: color.grayLight,
  borderTopColor: color.grayLight,
  borderTopWidth: size.moderateScale(1),
  gap: size.moderateScale(10)
})

export const row = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(20)
})

export const details = () => ({
  flex: 1,
})

export const addressTitle = () => ({
  color: color.primary,
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.sarabunSemiBold,
})

export const addressBody = () => ({
  color: color.primary,
  fontSize: fontSize.small,
  fontFamily: fonts.sarabunRegular,
  textDecorationLine: 'underline',
  lineHeight: fontSize.small
})

export const middleView = () => ({
  
})

export const deliveryStatus = () => ({
  flexDirection: 'row',
  paddingHorizontal: size.moderateScale(20),
  borderBottomColor: color.grayLight,
  borderBottomWidth: size.moderateScale(1),
  paddingVertical: size.moderateScale(20),
})

export const deliveryInfo = () => ({
  flex: 1,
  gap: size.moderateScale(5),
})

export const textCapital = () => ({
  color: color.primary,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunRegular,
  textTransform: 'uppercase',
})

export const textCapitalBold = () => ({
  flex: 1,
  color: color.primary,
  fontSize: fontSize.middleMedium,
  fontFamily: fonts.sarabunBold,
  textTransform: 'uppercase',
  textAlign:'center',
})

export const textLarge = () => ({
  color: color.primary,
  fontSize: fontSize.middleMedium,
  fontFamily: fonts.sarabunRegular,
  textTransform: 'uppercase',
  lineHeight: fontSize.middleMedium,
})

export const textRow = () => ({
  flexDirection: 'row',
  alignItems: 'flex-end',
  gap: size.moderateScale(8)
})

export const textSmall = () => ({
  color: color.primary,
  fontSize: fontSize.littleSmall,
  fontFamily: fonts.sarabunRegular,
})

export const totalEarningView = () => ({
  backgroundColor: color.mostlyWhite,
  paddingVertical: size.moderateScale(15),
  paddingHorizontal: size.moderateScale(20),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: size.moderateScale(8)
})

export const bottomView = () => ({
  flexDirection: 'row',
  width: '100%',
  gap: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(20),
})

export const button = () => ({
  width: size.moderateScale(150),
  paddingVertical: size.moderateScale(13),
  borderRadius: size.moderateScale(20)
})

export const buttonLG = () => ({
  width: size.moderateScale(150),
  paddingVertical: size.moderateScale(13),
  borderRadius: size.moderateScale(20)
})

export const buttonText = () => ({
  color: color.primary,
  fontSize: fontSize.smallMedium,
  fontFamily: fonts.sarabunMedium,
})

export const buttonTextLG = () => ({
  color: color.secondary,
  fontSize: fontSize.smallMedium,
  fontFamily: fonts.sarabunMedium,
})