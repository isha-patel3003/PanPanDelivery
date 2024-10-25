import { color, fonts, fontSize, size } from "../../theme";

export const mainView = (bgColor) => ({
  padding: size.moderateScale(10),
  width: size.moderateScale(100),
  height: size.moderateScale(70),
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: bgColor ?? color.white,
  borderRadius: size.moderateScale(20),
})

export const cardTitle = () => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.sarabunRegular,
  color: color.white,
  lineHeight: fontSize.littleMedium
})

export const cardBody = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.sarabunRegular,
  color: color.white,
  lineHeight: fontSize.littleMedium
})