import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const CommonPoint = props => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(30)}
      height={props.height ?? size.moderateScale(30)}
      viewBox="0 0 1024 1024"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fill={props.fill ?? color.primary}
        d="M406.055 511.941v.008c0 58.479 47.407 105.886 105.886 105.886 58.478 0 105.886-47.407 105.886-105.886v-.008-.007c0-58.478-47.407-105.886-105.886-105.886-58.478 0-105.886 47.407-105.886 105.886v.007zm105.886 347.674c-191.564 0-347.555-155.992-347.555-347.674s155.992-347.555 347.555-347.555 347.555 155.992 347.555 347.555-155.874 347.674-347.555 347.674zm0-624.323c-152.565 0-276.65 124.085-276.65 276.65s124.085 276.65 276.65 276.65 276.65-124.085 276.65-276.65-124.085-276.65-276.65-276.65z" />
    </Svg>
  )
}
