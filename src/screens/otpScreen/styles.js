import { color, fonts, fontSize, size } from "../../theme";

export const container = () => ({
  flex: 1,
  paddingTop: size.moderateScale(10)
})

export const middleView = () => ({
  padding: size.moderateScale(30),
})

export const heading = () => ({
  color: color.primary,
  fontSize: fontSize.middleMedium,
  lineHeight: fontSize.middleMedium,
  fontFamily: fonts.sarabunBold,
  textAlign: 'center'
})

export const bodyText = () => ({
  width: '80%',
  color: color.black,
  fontSize: fontSize.littleMedium,
  lineHeight: fontSize.littleMedium,
  fontFamily: fonts.sarabunRegular,
  textAlign: 'center',
  marginHorizontal: 'auto',
  marginTop: size.moderateScale(10)
})

export const formView = () => ({
  gap: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(20)
})

export const otpContainer = () => ({
  flexDirection: 'row',
  justifyContent: 'center',
  paddingBottom: size.moderateScale(20),
})

export const inputs = (error) => ({
  textAlign: 'center',
  fontSize: fontSize.littleMedium,
  lineHeight:  fontSize.littleMedium,
  fontFamily: fonts.sarabunSemiBold,
  color: color.primary,
  width: size.moderateScale(40),
  marginHorizontal: size.moderateScale(5),
  borderColor: error ? color.redColor : color.secondary,
  borderWidth: size.moderateScale(2),
  borderRadius: size.moderateScale(5),
  paddingVertical: size.moderateScale(0),
  height: size.moderateScale(50)
})

export const errorTextView = () => ({
  position: 'absolute',
  bottom: size.moderateScale(-2)
})

export const errorText = () => ({
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunMedium,
  color: color.redColor
})

export const resendBtnView = () => ({
  flexDirection:  'row',
  alignItems: 'center',
  justifyContent: 'center'
})

export const resendText = () => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.sarabunSemiBold,
  color: color.black
})

export const resendDisabledText = () => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.sarabunBold,
  color: color.tertiaryTextColor
})

export const button = (isDisabled, loading) => ({
  width: '100%',
  height: size.moderateScale(40),
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: size.moderateScale(8),
  backgroundColor: isDisabled || loading ? color.gray : color.secondary,
})

export const otpBtnText = (isDisabled, loading) => ({
  color: isDisabled || loading ? color.white : color.primary
})