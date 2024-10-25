import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const LeftArrow = props => {
  return (
    <Svg
      fill={props.fill ?? color.black}
      width={props.width ?? size.moderateScale(20)}
      height={props.height ?? size.moderateScale(20)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <Path d="M213.3 205.3L213.3 77.3 0 248 213.3 418.7 213.3 290.7 512 290.7 512 205.3z" />
    </Svg>
  )
}
