import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const BackArrow = props => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(25)}
      height={props.height ?? size.moderateScale(25)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G data-name="Layer 2">
        <Path
          d="M13.83 19a1 1 0 01-.78-.37l-4.83-6a1 1 0 010-1.27l5-6a1 1 0 011.54 1.28L10.29 12l4.32 5.36a1 1 0 01-.78 1.64z"
          data-name="arrow-ios-back"
          fill={props.fill ?? color.black}
        />
      </G>
    </Svg>
  )
}
