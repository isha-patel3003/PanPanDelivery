import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const Wallet = props => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(25)}
      height={props.height ?? size.moderateScale(25)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 15a1 1 0 100-2 1 1 0 000 2z" fill={props.fill ?? color.white} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.775.985a3 3 0 013.828 2.333l.333 1.831A3.001 3.001 0 0123 8v2.764c.614.55 1 1.348 1 2.236v2c0 .889-.386 1.687-1 2.236V20a3 3 0 01-3 3H4a3 3 0 01-3-3V8a3 3 0 012.501-2.959L16.775.985zM21 16a1 1 0 001-1v-2a1 1 0 00-1-1h-3a1 1 0 00-1 1v2a1 1 0 001 1h3zm0 2v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1h16a1 1 0 011 .993V10h-3a3 3 0 00-3 3v2a3 3 0 003 3h3zM18.695 3.607L18.941 5H10l7.423-2.177a1 1 0 011.272.784z"
        fill={props.fill ?? color.white}
      />
    </Svg>
  )
}
