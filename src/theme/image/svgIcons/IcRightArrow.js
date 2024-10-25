import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const RightAroow = props => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(15)}
      height={props.height ?? size.moderateScale(15)}
      viewBox="0 0 1024 1024"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fill={props.fill ?? color.black}
        d="M256 120.768L306.432 64 768 512 306.432 960 256 903.232 659.072 512z" />
    </Svg>
  )
}
