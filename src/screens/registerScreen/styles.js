import { color, fonts, fontSize, size } from "../../theme";

export const mainView = () => ({
  flex: 1,
})

export const header = () => ({
  backgroundColor: color.primary,
  paddingHorizontal: size.moderateScale(10),
})

export const headerText = () => ({
  color: color.secondary,
  paddingLeft: size.moderateScale(5),
})

export const uploadPhotoWrapper = (error) => ({
  width: size.moderateScale(100),
  height: size.moderateScale(100),
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  marginTop: size.moderateScale(10),
  marginBottom: size.moderateScale(25),
  elevation: size.moderateScale(10),
  backgroundColor: '#ffffff',
  borderRadius: size.moderateScale(50),
  borderColor: error ? color.redColor : color.grayLight,
  borderWidth: size.moderateScale(2),
  shadowColor: color.black,
  shadowOffset: { width: 0, height: size.moderateScale(2) },
  shadowOpacity: size.moderateScale(0.3),
  shadowRadius: size.moderateScale(3),
})

export const uploadPhotoView = (photo) => ({
  width: size.moderateScale(100),
  height: '100%',
  borderRadius: size.moderateScale(50),
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'flex-end'
})

export const userPhoto = () => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
})

export const plusIconView = () => ({
  position: 'absolute',
  width: size.moderateScale(25),
  height: size.moderateScale(25),
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: size.moderateScale(20),
  backgroundColor: color.secondary,
  right: size.moderateScale(10),
  bottom: size.moderateScale(0)
})

export const photoError = () => ({
  textAlign: 'center',
  fontSize: fontSize.verySmall,
  color: color.redColor,
  fontFamily: fonts.sarabunMedium,
  lineHeight: size.moderateScale(12)
})

export const formView = () => ({
  paddingVertical: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(10)
})

export const datePickerView = () => ({
  height: size.moderateScale(55),
  marginBottom: size.moderateScale(3),
})

export const row = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: size.moderateScale(10)
})

export const inputBoxView = () => ({
  flex: 1,
})

export const inputBox = () => ({
  width: '100%',
  textAlign: 'start',
  verticalAlign: ''
})

export const buttonSubmit = () => ({
  width: '100%',
  marginTop: size.moderateScale(20),
  height: size.moderateScale(40),
  backgroundColor: color.secondary,
})

export const flatListContainer = () => ({
  flexGrow: 1,
  gap: size.moderateScale(0),
  paddingVertical: size.moderateScale(10)
})

export const bottomSheetBtn = () => ({
  paddingVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(10),
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const bottomSheetText = () => ({
  fontSize: fontSize.littleMedium,
  color: color.redColor,
  fontFamily: fonts.sarabunSemiBold,
  color: color.primary,
  letterSpacing: size.moderateScale(1)
})

export const checkBoxView = (selected) => ({
  width: size.moderateScale(20),
  height: size.moderateScale(20),
  borderColor: color.primary,
  borderWidth: size.moderateScale(2),
  borderRadius: size.moderateScale(5),
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: selected ? color.primary : color.white
})

export const loadingView = () => ({
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 101
})

export const bottomSheetInput = () => ({
  paddingHorizontal: size.moderateScale(20),
  gap: size.moderateScale(10)
})

export const bottomSheetTextInput = () => ({
  fontSize: fontSize.littleMedium,
  color: color.primary,
  fontFamily: fonts.sarabunSemiBold,
  paddingHorizontal: size.moderateScale(10),
  borderColor: color.grayLight,
  borderWidth: size.moderateScale(1),
  borderRadius: size.moderateScale(10),
})

export const addressData = () => ({
  padding: size.moderateScale(10),
  backgroundColor: color.mostlyWhite,
  borderRadius: size.moderateScale(8),
  margin: size.moderateScale(10)
})

export const addressText = () => ({
  fontSize: fontSize.small,
  color: color.black,
  fontFamily: fonts.sarabunMedium,
})