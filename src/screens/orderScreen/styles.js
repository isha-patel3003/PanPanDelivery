import { color, fonts, fontSize, size } from "../../theme"

export const mainView = () => ({
  flex: 1,
})

export const header = () => ({
  backgroundColor: color.white,
  paddingHorizontal: size.moderateScale(10),
  borderBottomWidth: size.moderateScale(1),
  paddingVertical: size.moderateScale(0)
})

export const headerTitle = () => ({
  color: color.primary,
  fontSize: fontSize.middleMedium,
  textAlign:  'center',
})

export const middleView = () => ({
  
})

export const locationDropLists = () => ({
  borderBottomWidth: size.moderateScale(0.5),
  paddingBottom: size.moderateScale(10)
})

export const locationView = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: size.moderateScale(10),
  paddingVertical: size.moderateScale(5),
  paddingHorizontal: size.moderateScale(10),
})

export const locationView2 = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: size.moderateScale(5),
  paddingVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(10),
})

export const locationText = () => ({
  color: color.primary,
  fontSize: fontSize.small,
  fontFamily: fonts.sarabunMedium
})

export const animatedView = () => ({
  width: '100%',
  alignItems: 'center',
  paddingHorizontal: size.moderateScale(10)
})

export const dropPointsView = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: size.moderateScale(5),
  borderWidth: size.moderateScale(1),
  borderColor: color.primary,
  borderRadius: size.moderateScale(30),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.white
})

export const boldText = () => ({
  color: color.primary,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunBold,
  textTransform: 'uppercase'
})

export const downIconView = () => ({
  transform: [{ rotate:  '-90deg' }],
})

export const horizontalLine = () => ({
  width: '70%',
  height: size.moderateScale(2),
  borderWidth: size.moderateScale(2),
  borderColor: color.gray,
  position: 'absolute',
  zIndex: size.moderateScale(-1),
  top: '50%',
  transform: [{translateY : size.moderateScale(-2)}]
})

export const dotsView = () => ({
  position: 'absolute',
  zIndex: size.moderateScale(-1),
  top: '50%',
  left: size.moderateScale(10),
  transform: [{translateY : size.moderateScale(-15)}],
  alignItems: 'center',
  justifyContent: 'center',
})

export const locationDropView = () => ({
  paddingHorizontal: size.moderateScale(10),
})

export const collapseButton = () => ({
  width: "40%",
  alignItems: 'center',
  marginHorizontal: 'auto',
  paddingVertical: size.moderateScale(5),
  borderColor: color.primary,
  borderWidth: size.moderateScale(1),
  borderRadius: size.moderateScale(30),
})

export const collapseButtonText  = () => ({
  color: color.redColor,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunBold,
  textTransform: 'uppercase'
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
  gap: size.moderateScale(10),
})

export const textCapital = () => ({
  color: color.primary,
  fontSize: fontSize.small,
  fontFamily: fonts.sarabunRegular,
  textTransform: 'uppercase',
  lineHeight: fontSize.small,
})

export const textCapitalBold = () => ({
  flex: 1,
  color: color.primary,
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.sarabunBold,
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
  gap: size.moderateScale(5)
})

export const textSmall = () => ({
  color: color.primary,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunRegular,
  lineHeight: fontSize.verySmall,
})

export const totalEarningView = () => ({
  backgroundColor: color.mostlyWhite,
  paddingVertical: size.moderateScale(15),
  paddingHorizontal: size.moderateScale(20),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: size.moderateScale(8),
  borderBottomColor: color.grayLight,
  borderBottomWidth: size.moderateScale(1)
})

export const bottomView = () => ({
  flex: 1,
  paddingVertical: size.moderateScale(5),
  justifyContent: 'space-between'
})

export const row = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: size.moderateScale(5),
  paddingHorizontal: size.moderateScale(10),
  paddingVertical: size.moderateScale(5)
})

export const bodyText = () => ({
  color: color.primary,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunRegular,
})

export const buttonContainer = () => ({
  paddingHorizontal: size.moderateScale(20),
  paddingTop: size.moderateScale(10),
})

export const button = () => ({
  width: '100%',
  borderRadius: size.moderateScale(20),
  paddingVertical: size.moderateScale(10)
})

export const buttonText = () => ({
  fontSize: fontSize.littleMedium,
})

export const customSelectBtn = () => ({
  alignItems: 'center',
  paddingVertical: size.moderateScale(5),
  marginTop: size.moderateScale(5)
})

export const customSelectBtnText = () => ({
  color: color.redColor,
  fontSize: fontSize.small,
  fontFamily: fonts.sarabunRegular,
  textDecorationLine: 'underline'
})