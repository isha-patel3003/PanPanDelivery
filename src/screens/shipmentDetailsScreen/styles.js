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
  paddingHorizontal: size.moderateScale(10)
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
  paddingHorizontal: size.moderateScale(10),
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
  textAlign: 'center',
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
  paddingHorizontal: size.moderateScale(10),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: size.moderateScale(8)
})

export const bottomView = () => ({
  flexDirection: 'row',
  width: '100%',
  gap: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(10),
})

export const button = () => ({
  flex: 1,
  paddingVertical: size.moderateScale(10),
  borderRadius: size.moderateScale(10)
})

export const buttonLG = () => ({
  flex: 1,
  paddingVertical: size.moderateScale(10),
  borderRadius: size.moderateScale(10)
})

export const buttonText = () => ({
  color: color.primary,
  fontSize: fontSize.small,
  fontFamily: fonts.sarabunMedium,
})

export const buttonTextLG = () => ({
  color: color.secondary,
  fontSize: fontSize.small,
  fontFamily: fonts.sarabunMedium,
})

export const proofOfPickupView = () => ({
  height: size.moderateScale(300),
  padding: size.moderateScale(10)
})

export const proofOfPickupImageView = () => ({
  flex: 1,
  borderRadius: size.moderateScale(10),
  overflow: 'hidden',
  backgroundColor: color.mostlyWhite,
  padding: size.moderateScale(10)
})

export const proofOfPickupImage = () => ({
  objectFit: 'contain',
  height: '100%'
})

export const heading = () => ({
  color: color.primary,
  fontSize: fontSize.small,
  fontFamily: fonts.sarabunMedium,
})

export const successBtn = () => ({
  flex: 1,
  paddingVertical: size.moderateScale(10),
  borderRadius: size.moderateScale(10),
  backgroundColor: color.success,
  marginBottom: size.moderateScale(20),
  alignItems: 'center',
  justifyContent: 'center'
})

export const successBtnText = () => ({
  color: color.primary,
  fontSize: fontSize.small,
  fontFamily: fonts.sarabunMedium,
})