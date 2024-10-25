import { size } from "../../theme"

export const switchContainer = (width, height, trackColor) => ({
  width: size.moderateScale(width),
  height: size.moderateScale(height),
  borderRadius: 25,
  backgroundColor: trackColor,
  justifyContent: 'center',
  padding: 2,
})

export const thumb = (thumbSize, color) => ({
  width: size.moderateScale(thumbSize),
  height: size.moderateScale(thumbSize),
  borderRadius: size.moderateScale(thumbSize),
  backgroundColor: color,
})