import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const Logout = props => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(20)}
      height={props.height ?? size.moderateScale(20)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fill={props.fill ?? color.black}>
        <Path d="M13 4.009a1 1 0 10-2-.001l-.003 8.003a1 1 0 002 .001L13 4.01z" />
        <Path d="M4 12.992c0-2.21.895-4.21 2.343-5.657l1.414 1.414a6 6 0 108.485 0l1.415-1.414A8 8 0 114 12.992z" />
      </G>
    </Svg>
  )
}
