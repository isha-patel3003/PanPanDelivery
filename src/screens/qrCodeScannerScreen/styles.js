import { color, fonts, fontSize, size } from "../../theme"

export const mainView = () => ({
  flex: 1
})

export const header = () => ({
  backgroundColor: color.primary,
  height: size.moderateScale(60),
  paddingHorizontal: size.moderateScale(10),
  paddingVertical: size.moderateScale(5)
})

export const headerTitle = () => ({
  color: color.secondary,
  fontSize: fontSize.littleMedium,
  textAlign: 'center',
})

export const middleView = () => ({
  flex: 1,
  backgroundColor: color.secondary,
  alignItems: 'center',
  paddingTop: size.moderateScale(5),
})

export const riderDetails = () => ({
  paddingVertical: size.moderateScale(10),
  position: 'absolute',
  top: size.moderateScale(0),
  zIndex: size.moderateScale(2),
  backgroundColor: color.secondary,
  width: '100%'
})

export const riderName = () => ({
  fontSize: fontSize.middleSmallMedium,
  fontFamily: fonts.sarabunBold,
  color: color.primary,
  textAlign: 'center',
  lineHeight: size.moderateScale(22)
})

export const riderAddress = () => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.sarabunRegular,
  color: color.primary,
  textAlign: 'center',
  textDecorationLine: 'underline'
})

export const scannerButtonWrapper = (isCameraVisible) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: size.deviceWidth,
  backgroundColor: isCameraVisible ? color.primary : color.secondary
})

export const camera = () => ({
  flex: 1.5,
  width: '100%'
})

export const scannerButton = () => ({
  width: size.moderateScale(150),
  height: size.moderateScale(150),
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.primary,
  borderRadius: size.moderateScale(15)
})

export const bottomView = () => ({
  paddingVertical:  size.moderateScale(30),
  paddingHorizontal: size.moderateScale(20),
  backgroundColor: color.primary,
  alignItems: 'center',
  gap: size.moderateScale(10)
})

export const row = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  paddingHorizontal: size.moderateScale(10)
})

export const linkButton = () => ({
})

export const linkText = () => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.sarabunBold,
  color: color.secondary,
  textDecorationLine: 'underline'
})