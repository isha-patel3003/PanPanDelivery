import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const Scanner = props => {
  return (
    <Svg
    width={props.width ?? size.moderateScale(25)}
    height={props.height ?? size.moderateScale(25)}
      viewBox="0 0 31 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.001 10.89h2.582V5.676A5.249 5.249 0 014.091 2 5.116 5.116 0 017.719.474h15.438c2.841 0 5.15 2.34 5.15 5.202v5.216h2.57v2.601H0l.001-2.603zm5.15 0h20.59V5.676a2.627 2.627 0 00-.76-1.842 2.561 2.561 0 00-1.822-.76H7.72a2.558 2.558 0 00-1.814.764 2.625 2.625 0 00-.754 1.838v5.214zm23.158 5.218v5.201a5.256 5.256 0 01-1.51 3.688 5.123 5.123 0 01-3.64 1.53H7.718c-2.827 0-5.136-2.34-5.136-5.218v-5.2h2.568v5.202a2.628 2.628 0 00.75 1.845c.481.49 1.135.767 1.818.77h15.438c.685 0 1.342-.276 1.826-.766s.756-1.156.756-1.85v-5.2l2.57-.002z"
        fill={props.fill ?? color.black}
      />
    </Svg>
  )
}
