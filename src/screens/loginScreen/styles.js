import { color, fonts, fontSize, size } from "../../theme";

export const container = () => ({
  flex: 1,
  alignItems: 'center',
})

export const topView = () => ({
  paddingHorizontal: size.moderateScale(20),
  width: '100%',
  marginTop: size.moderateScale(10),
  alignItems: 'flex-end'
})

export const topIconView = () => ({
  width: size.moderateScale(40),
  height: size.moderateScale(40),
  backgroundColor: color.primary,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: size.moderateScale(20)
})

export const imageView = () => ({
  width: size.moderateScale(150),
  height: size.moderateScale(150),
})

export const image = () => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain'
})

export const mainTextView = () => ({
  alignItems: 'center',
  paddingVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(10)
})

export const mainText = () => ({
  textAlign: 'center',
  color: color.black,
  fontSize: fontSize.middleSmallMedium,
  fontFamily: fonts.sarabunSemiBold,
  lineHeight: size.moderateScale(25)
})

export const bodyText = () => ({
  textAlign: 'center',
  color: color.black,
  fontSize: fontSize.small,
  fontFamily: fonts.sarabunSemiBold,
  marginTop: size.moderateScale(10)
})

export const formView = () => ({
  width: '100%',
  paddingBottom: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(24)
})

export const labelText = () => ({
  textAlign: 'center',
  color: color.black,
  fontSize: fontSize.small,
  fontFamily: fonts.sarabunSemiBold,
})

export const textInputView = () => ({
  marginTop: size.moderateScale(20),
  marginBottom: size.moderateScale(25),
  height: size.moderateScale(52),
  gap: size.moderateScale(0),
})

export const inputText = (error) => ({
  width: '100%',
  height: size.moderateScale(40),
  paddingHorizontal: size.moderateScale(15),
  borderWidth: size.moderateScale(1),
  borderColor: error ? color.redColor : color.dark,
  borderRadius: size.moderateScale(8),
  color: color.black,
  fontSize: fontSize.small,
  lineHeight: fontSize.small,
  fontFamily: fonts.sarabunSemiBold,
  letterSpacing: size.moderateScale(1),
  paddingVertical: 0
})

export const errorInputText = () => ({
  borderColor: color.redColor,
});

export const errorText = () => ({
  color: color.redColor,
  fontSize: fontSize.littleSmall,
  fontFamily: fonts.sarabunRegular,
  lineHeight:  fontSize.littleSmall,
  paddingHorizontal: size.moderateScale(7),
  position: 'absolute',
  bottom: size.moderateScale(-1),
})

export const button = (loading) => ({
  width: '100%',
  height: size.moderateScale(40),
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: size.moderateScale(8),
  backgroundColor: loading ? color.grayLight : color.secondary,
});

export const buttonText = () => ({
  color: color.black,
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.sarabunSemiBold,
});

export const registerButton = () => ({
  width: '100%',
  height: size.moderateScale(40),
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: size.moderateScale(2),
  borderColor: color.redColor,
  borderRadius: size.moderateScale(8),
  marginTop: size.moderateScale(20),
});

export const registerBtnText = () => ({
  color: color.redColor,
  fontSize: fontSize.smallMedium,
  lineHeight: fontSize.smallMedium,
  fontFamily: fonts.sarabunSemiBold,
  textShadowColor: color.redColor,
  textShadowOffset: {
    width: size.moderateScale(2),
    height: size.moderateScale(2),
  },
});


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
  fontSize: fontSize.small,
  color: color.white,
})

export const modalTitle = () => ({
  flex: 1,
  fontFamily: fonts.sarabunSemiBold,
  fontSize: fontSize.littleMedium,
  lineHeight: fontSize.littleMedium,
  color: color.white,
  textAlign: 'center'
})

export const modalBody = () => ({
  
})

export const buttonContainer = () => ({
  
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
  fontSize: fontSize.small,
  color: color.primary,
  lineHeight: fontSize.small
})
