import { color, fonts, fontSize, size } from "../../theme";

export const mainView = () => ({
  flex: 1,
})

export const topView = () => ({
  paddingHorizontal: size.moderateScale(10),
  paddingTop: size.moderateScale(20),
  paddingBottom: size.moderateScale(20),
  borderBottomLeftRadius: size.moderateScale(30),
  borderBottomRightRadius: size.moderateScale(30),
  backgroundColor: color.primary,
})

export const riderContainer = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const earningPointsView = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(10),
})

export const label = () => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.sarabunSemiBold,
  color: color.white,
})

export const riderDetailsWrapper = () => ({
  gap: size.moderateScale(20),
  borderRadius: size.moderateScale(30),
})

export const riderInfo = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: size.moderateScale(10)
})

export const riderImageView = () => ({
  width: size.moderateScale(40),
  height: size.moderateScale(40),
})

export const riderImage = () => ({
  width: '100%',
  height: '100%',
  borderRadius: size.moderateScale(30),
})

export const riderDetails = () => ({
  fontSize: fontSize.verySmallMedium,
  fontFamily: fonts.sarabunRegular,
  color: color.secondary,
})

export const subText = () => ({
  fontSize: fontSize.littleSmall,
  fontFamily: fonts.sarabunRegular,
  color: color.secondary,
  lineHeight: fontSize.littleSmall
})

export const title = () => ({
  fontSize: fontSize.middleMedium,
  fontFamily: fonts.sarabunRegular,
  color: color.white,
  lineHeight: fontSize.middleMedium,
  marginVertical: size.moderateScale(3)
})

export const h2 = () => ({
  fontSize: fontSize.middleSmallMedium,
  fontFamily: fonts.sarabunRegular,
  color: color.white,
  lineHeight: size.moderateScale(25)
})

export const moneyText = () => ({
  fontSize: fontSize.littleLarge,
  fontFamily: fonts.sarabunRegular,
  color: color.secondary,
  lineHeight: size.moderateScale(38)
})

export const middleView = () => ({
  flexShrink: 0,
  backgroundColor: color.white
})

export const switchWrapper = () => ({
  justifyContent: 'center',
  alignItems: 'center',
  gap: size.moderateScale(5),
  width: size.moderateScale(100),
})

export const switchText = () => ({
  color: color.white,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunSemiBold,
  textAlign: 'center',
})

export const formView = () => ({
  paddingVertical: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
})

export const inputView = () => ({
  paddingHorizontal: size.moderateScale(15),
  borderWidth: size.moderateScale(1),
  borderRadius: size.moderateScale(25),
  borderColor: color.primary,
  height: size.moderateScale(50),
  flexDirection: 'row',
  alignItems: 'center',
})

export const input = () => ({
  color: color.primary,
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.sarabunMedium,
  lineHeight: fontSize.littleMedium,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 0
})

export const iconView = () => ({
  width: size.moderateScale(30),
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: size.moderateScale(3)
})

export const bottomView = () => ({
  flexGrow: 1,
  paddingBottom: size.moderateScale(15),
  backgroundColor: color.white
})

export const cardWrapper = () => ({
  flex: 1,
  backgroundColor: color.white,
  paddingHorizontal: size.moderateScale(20),
  gap: size.moderateScale(10)
})

export const cardView = () => ({
 gap: size.moderateScale(5)
})

export const row = () => ({
 flexDirection: 'row',
 alignItems: 'center',
 justifyContent: 'space-between'
})

export const cardWrapperTitle = () => ({
  fontSize: fontSize.middleMedium,
  fontFamily: fonts.sarabunSemiBold,
  color: color.black,
})

export const orderWrapper = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: size.moderateScale(10),
  paddingVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(20),
  borderTopWidth: size.moderateScale(5),
  borderTopColor: color.mostlyWhite,
  borderBottomWidth: size.moderateScale(5),
  borderBottomColor: color.mostlyWhite,
  backgroundColor: color.white,
})

export const orderDetailsView = () => ({
  flex: 1,
  alignItems: 'center'
})

export const infoText = () => ({
  fontFamily: fonts.sarabunMedium,
  fontSize: fontSize.verySmall,
  color: color.redColor,
})

export const orderText = () => ({
  fontFamily: fonts.sarabunBold,
  fontSize: fontSize.littleMedium,
  color: color.black,
  lineHeight: fontSize.middleMedium,
})

export const orderDetailsBtn = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: size.moderateScale(5),
})

export const orderLinkText = () => ({
  fontFamily: fonts.sarabunBold,
  fontSize: fontSize.small,
  color: color.primary,
})

export const transactionDetailsWrapper = () => ({
  paddingVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(10),
  backgroundColor: color.white,
})

export const transactionDetails = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: size.moderateScale(10),
  borderBottomColor: color.gray,
  borderBottomWidth: size.moderateScale(1),
  paddingVertical: size.moderateScale(15)
})

export const viewHeaderText = () => ({
  fontFamily: fonts.sarabunBold,
  fontSize: fontSize.littleMedium,
  color: color.primary,
})

export const transactionIconView = () => ({
  backgroundColor: color.primary,
  width: size.moderateScale(50),
  height: size.moderateScale(50),
  borderRadius: size.moderateScale(25),
  alignItems: 'center',
  justifyContent: 'center',
  transform: [{ rotate:  '-45deg' }],
})

export const rightView = () => ({
  flex: 1,
})

export const deliveryTextLabel = () => ({
  fontFamily: fonts.sarabunBold,
  fontSize: fontSize.littleMedium,
  color: color.black,
  lineHeight: fontSize.littleMedium,
})

export const deliveryTextKey = () => ({
  fontFamily: fonts.sarabunSemiBold,
  fontSize: fontSize.verySmall,
  color: color.primary,
  lineHeight: size.moderateScale(14)
})
