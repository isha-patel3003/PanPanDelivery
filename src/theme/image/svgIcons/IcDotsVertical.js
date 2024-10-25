import React from 'react'
import Svg, { Path, G } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const DotsVertical = props => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(50)}
      height={props.height ?? size.moderateScale(50)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fill={props.fill ?? color.primary}>
        <Path d="M14.5 4a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM14.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM12 22.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
      </G>
    </Svg>
  )
}
