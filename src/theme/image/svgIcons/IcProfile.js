import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const Profile = props => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(25)}
      height={props.height ?? size.moderateScale(25)}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path 
        fill={props.fill ?? color.white}
        d="M16 16a7 7 0 10-7-7 7 7 0 007 7zm0-12a5 5 0 11-5 5 5 5 0 015-5zM17 18h-2A11 11 0 004 29a1 1 0 001 1h22a1 1 0 001-1 11 11 0 00-11-11zM6.06 28A9 9 0 0115 20h2a9 9 0 018.94 8z"
      />
    </Svg>
  )
}
