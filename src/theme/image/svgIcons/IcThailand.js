import React from 'react'
import Svg, { ClipPath, Defs, G, Mask, Path, Rect } from 'react-native-svg'

import { size } from '../../Size'

export const Thailand = props => {
  return (
    <Svg
    width={props.width ?? size.moderateScale(25)}
    height={props.height ?? size.moderateScale(25)}
      viewBox="0 -4 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_503_2920)">
        <Rect
          x={0.25}
          y={0.25}
          width={27.5}
          height={19.5}
          rx={1.75}
          fill="#fff"
          stroke="#F5F5F5"
          strokeWidth={0.5}
        />
        <Mask
          id="a"
          style={{
            maskType: "alpha"
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={28}
          height={20}
        >
          <Rect
            x={0.25}
            y={0.25}
            width={27.5}
            height={19.5}
            rx={1.75}
            fill="#fff"
            stroke="#fff"
            strokeWidth={0.5}
          />
        </Mask>
        <G mask="url(#a)" fillRule="evenodd" clipRule="evenodd">
          <Path d="M0 4h28V0H0v4zM0 20h28v-4H0v4z" fill="#F12532" />
          <Path d="M0 13.333h28V6.667H0v6.666z" fill="#322B6C" />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_503_2920">
          <Rect width={28} height={20} rx={2} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
