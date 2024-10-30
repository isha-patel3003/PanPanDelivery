import { color, fonts, fontSize, size } from "../../theme"

export const mainView = () => ({
  flex: 1,
  backgroundColor: color.mostlyWhite,
})

export const header = () => ({
  backgroundColor: color.primary
})

export const headerText = () => ({
  color: color.secondary,
})

export const middleView = () => ({
  flex: 1,
})

export const cameraView = () => ({
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.white,
  borderRadius: size.moderateScale(10),
  height: size.moderateScale(350),
})

export const camera = () => ({
  flex: 1,
})

export const image = () => ({
  flex: 1,
})

export const indicator = () => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
})

export const bottomView = () => ({
  padding: size.moderateScale(10),
  backgroundColor: color.mostlyWhite,
})

export const button = () => ({
  flex: 1,
  height: size.moderateScale(40),
  width: '100%'
})

export const buttonText = () => ({
 fontSize: fontSize.small,
})

export const formView = () => ({
  paddingVertical: size.moderateScale(10),
})

export const row = () => ({
  flexDirection: 'row',
  gap: size.moderateScale(10)
})

export const textInputView = () => ({
  flex: 1,
})

export const label = () => ({
  fontSize: fontSize.verySmall,
  fontFamily: fonts.sarabunRegular,
  color: color.primary,
  paddingHorizontal: size.moderateScale(5)
})

export const textInput = () => ({
  height: size.moderateScale(50),
  borderRadius: size.moderateScale(8),
  borderWidth: size.moderateScale(0.5),
  borderColor: color.primary,
  paddingHorizontal: size.moderateScale(10),
  fontSize: fontSize.verySmall,
  color: color.primary
})