import { color, size } from "../../theme"

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
  alignItems: 'center',
})
