import { color, fonts, fontSize, size } from "../../theme"

export const mainView = (statusbarHeight) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '100%',
  backgroundColor: color.customBlack(0.6),
  alignItems: 'center',
  justifyContent: 'center',
  height: size.deviceHeight + size.moderateScale(statusbarHeight),
  flex: 1,
})

export const modalContainer = () => ({
  width: '80%',
  backgroundColor: color.white,
  borderRadius: size.moderateScale(10),
  overflow: 'hidden'
})

export const modalHeader = () => ({
  paddingVertical: size.moderateScale(5),
  paddingHorizontal: size.moderateScale(10),
  width: '100%',
  backgroundColor: color.primary,
})

export const modalTitle = () => ({
  color: color.white,
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.sarabunSemiBold,
  textAlign: 'center',
})

export const modalContent = () => ({
  paddingVertical: size.moderateScale(5),
  paddingHorizontal: size.moderateScale(10),
})

export const modalMsg = () => ({
  color: color.black,
  fontSize: fontSize.small,
  fontFamily: fonts.sarabunMedium,
  textAlign: 'center'
})

export const buttonContainer = () => ({
  marginTop: size.moderateScale(15),
  marginBottom: size.moderateScale(5),
  paddingHorizontal: size.moderateScale(5),
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: size.moderateScale(10),
})

export const buttonView = () => ({
  paddingVertical: size.moderateScale(0),
  paddingHorizontal: size.moderateScale(15),
  backgroundColor: color.primary,
  borderRadius: size.moderateScale(8)
})

export const buttonText = () => ({
  color: color.white,
  fontSize: fontSize.small,
  fontFamily: fonts.sarabunMedium,
  textTransform: 'uppercase'
})
