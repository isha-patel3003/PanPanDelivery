import React from 'react'
import Svg, { Circle, Defs, Path } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const Search = props => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(25)}
      height={props.height ?? size.moderateScale(25)}
      viewBox="0 0 24 24"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Defs></Defs>
      <Circle className="cls-1" cx={9.14} cy={9.14} r={7.64} strokeWidth={size.moderateScale(1.5)} stroke={props.stroke ?? color.primary} fill='transparent' />
      <Path className="cls-1" d="M22.5 22.5L14.39 14.39"strokeWidth={size.moderateScale(1.5)} stroke={props.stroke ?? color.primary} />
    </Svg>
  )
}
