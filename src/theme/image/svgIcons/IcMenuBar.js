import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const MenuBar = props => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(35)}
      height={props.height ?? size.moderateScale(35)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G stroke={props.stroke ?? color.black} strokeWidth={2} strokeLinecap="round">
        <Path d="M20 7H4M20 12H4M20 17H4" />
      </G>
    </Svg>
  )
}
