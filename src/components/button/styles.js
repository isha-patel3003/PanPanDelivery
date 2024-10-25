import {color, fonts, fontSize, size} from '../../theme';

export const btnContainer = (isDisabled) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  backgroundColor: isDisabled ? color.grayLight : color.secondary,
  elevation: size.moderateScale(2),
  shadowColor: isDisabled ? color.gray : color.secondary,
  borderRadius: size.moderateScale(8),
  gap: size.moderateScale(8),
  elevation: size.moderateScale(5),
  shadowColor: color.black,
  shadowOffset: { width: 0, height: size.moderateScale(2) },
  shadowOpacity: size.moderateScale(0.1),
  shadowRadius: size.moderateScale(2),
}); 


export const titleStyle = (disabled) => ({
  fontSize: fontSize.littleMedium,
  color: disabled ? color.white : color.primary,
  fontFamily: fonts.sarabunSemiBold,
  textTransform: 'uppercase',
  lineHeight: fontSize.littleMedium,
});

export const lGBtntitleStyle = (disabled) => ({
  fontSize: fontSize.littleMedium,
  color: disabled ? color.white : color.secondary,
  fontFamily: fonts.sarabunSemiBold,
  textTransform: 'uppercase',
  lineHeight: fontSize.littleMedium,
});

export const btnContainerLG = () => ({
  backgroundColor: color.primary,
  borderRadius: size.moderateScale(8),
  overflow: 'hidden'
});

export const linearGradientButton = () => ({
  backgroundColor: color.white
});

export const linearGradient = (isDisabled) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: size.moderateScale(8),
  elevation: size.moderateScale(5),
  shadowColor: color.black,
  shadowOffset: { width: 0, height: size.moderateScale(2) },
  shadowOpacity: size.moderateScale(0.1),
  shadowRadius: size.moderateScale(2),
  minWidth:  size.moderateScale(150),
  paddingVertical: size.moderateScale(10),
  borderRadius: size.moderateScale(8),
  shadowColor: isDisabled ? color.gray : color.black,
  overflow: 'hidden'
});

export const linearGradientView = (isDisabled) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: size.moderateScale(15)
});
