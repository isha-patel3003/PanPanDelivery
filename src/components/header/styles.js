import { color, fonts, fontSize, size } from "../../theme";


export const container = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: size.moderateScale(10)
})

export const iconView = () => ({
  width: size.moderateScale(40),
  height: size.moderateScale(40),
  alignItems: 'center',
  justifyContent: 'center'
})

export const middleView = () => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
})

export const titleView = () => ({
  flex: 1,
  justifyContent: 'center',
})

export const title = () => ({
  fontSize: fontSize.middleMedium,
  fontFamily: fonts.sarabunSemiBold,
  color: color.black,
})