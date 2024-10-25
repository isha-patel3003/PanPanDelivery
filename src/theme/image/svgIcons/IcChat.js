import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const Chat = props => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(25)}
      height={props.height ?? size.moderateScale(25)}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M420 309.014a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1zM417 309.014a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1zM414 309.014a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1zM410 300.014a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1zM407 300.014a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1zM404 300.014a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1z"
        style={{
          InkscapeStroke: "none"
        }}
        transform="translate(-396 -292)"
        color={props.color ?? color.white}
        fill={props.fill ?? color.white}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={4.1}
      />
      <Path
        d="M400.059 294.014c-1.094 0-2.059.877-2.059 2v10c0 1.122.965 2 2.059 2H402v3a1 1 0 001.707.707l3.707-3.707H408v7c0 1.122.965 2 2.059 2h4.88l3.707 3.707a1 1 0 001.708-.707v-3h3.587c1.094 0 2.059-.878 2.059-2v-10c0-1.122-.965-2-2.059-2H416v-7c0-1.123-.965-2-2.059-2zm0 2h13.882c.04 0 .054.004.059.006v9.988a.17.17 0 01-.059.006H407a1 1 0 00-.707.293L404 308.6v-1.586a1 1 0 00-1-1h-2.941a.168.168 0 01-.059-.006v-9.989a.17.17 0 01.059-.006zm15.941 9h7.941c.04 0 .054.004.059.006v9.988a.17.17 0 01-.059.006h-4.587a1 1 0 00-1 1v1.586l-2.293-2.293a1 1 0 00-.707-.293h-5.295a.168.168 0 01-.059-.006v-6.994h3.941c1.094 0 2.059-.878 2.059-2z"
        style={{
          InkscapeStroke: "none"
        }}
        transform="translate(-396 -292)"
        color={props.color ?? color.white}
        fill={props.fill ?? color.white}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={4.1}
      />
    </Svg>
  )
}
