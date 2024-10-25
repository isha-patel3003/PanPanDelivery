import { color, size, fontSize, fonts } from "../../theme";

export const mainView  = () => ({
  flex: 1,
  backgroundColor: color.white
})

export const topView  = () => ({
  backgroundColor: color.primary,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingLeft: size.moderateScale(10),
  paddingRight: size.moderateScale(15),
  alignItems: 'center',
})

export const iconView  = () => ({
  width: size.moderateScale(40),
  height: size.moderateScale(40),
  justifyContent: 'center',
})

export const imageView  = () => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  height: size.moderateScale(60),
  width: size.moderateScale(60)
})

export const image  = () => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  borderRadius: size.moderateScale(40)
})

export const middleView  = () => ({
  paddingVertical: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(10)
})

export const buttonContainer  = () => ({
  gap: size.moderateScale(20)
})

export const button  = () => ({
  padding: size.moderateScale(10),
  flexDirection: 'row',
  gap: size.moderateScale(10),
  backgroundColor: color.mostlyWhite,
  borderRadius: size.moderateScale(15),
  alignItems: 'center'
}) 

export const buttonText  = () => ({
  fontFamily: fonts.sarabunMedium,
  fontSize: fontSize.middleMedium,
  color: color.black,
}) 

export const modalView = () => ({
  borderRadius: size.moderateScale(10),
  overflow: 'hidden',
  width: size.moderateScale(300)
})

export const modalContent = () => ({
  backgroundColor: color.white
})

export const modalHeader = () => ({
  paddingVertical: size.moderateScale(5),
  paddingHorizontal: size.moderateScale(10),
  backgroundColor: color.primary,
  flexDirection: 'row',
  alignItems: 'center',
})

export const modalHeaderBtnText = () => ({
  fontFamily: fonts.sarabunRegular,
  fontSize: fontSize.littleMedium,
  color: color.white,
})

export const modalTitle = () => ({
  flex: 1,
  fontFamily: fonts.sarabunSemiBold,
  fontSize: fontSize.middleSmallMedium,
  color: color.white,
  textAlign: 'center'
})

export const modalButton = () => ({
  padding: size.moderateScale(15),
  backgroundColor: color.white,
  flexDirection:'row',
  alignItems: 'center',
  gap: size.moderateScale(10)
})

export const modalButtonText = () => ({
  flex: 1,
  fontFamily: fonts.sarabunSemiBold,
  fontSize: fontSize.smallMedium,
  color: color.primary,
})