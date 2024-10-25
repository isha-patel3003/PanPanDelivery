import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const ParcelBox = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? size.moderateScale(20)}
      height={props.height ?? size.moderateScale(20)}
      viewBox="0 0 256 256"
      {...props}
    >
      <G
        stroke="none"
        strokeWidth={0}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="none"
        fillRule="nonzero"
        opacity={1}
      >
        <Path
          d="M45 37.605c-.254 0-.509-.048-.749-.146l-16.076-6.494a2 2 0 011.499-3.709L45 33.448l36.253-14.646L45 4.157 8.747 18.803l11.485 4.64a2 2 0 01-1.499 3.709L2.659 20.657a2 2 0 010-3.708L44.251.146a2 2 0 011.498 0l41.593 16.803a2 2 0 010 3.708L45.749 37.46a2 2 0 01-.749.145z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={props.fill ?? color.black}
          fillRule="nonzero"
          opacity={1}
        />
        <Path
          d="M45 90a2.002 2.002 0 01-2-2V35.605a2 2 0 011.251-1.854l41.593-16.803a1.999 1.999 0 012.749 1.854v52.395a2 2 0 01-1.251 1.854L45.749 89.854A1.99 1.99 0 0145 90zm2-53.045v48.081l37.593-15.187V21.768L47 36.955z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={props.fill ?? color.black}
          fillRule="nonzero"
          opacity={1}
        />
        <Path
          d="M45 90a1.99 1.99 0 01-.749-.146L2.659 73.052a2 2 0 01-1.251-1.854V18.803a2 2 0 012.749-1.854l16.075 6.495a2 2 0 01-1.499 3.709L5.408 21.768v48.081L43 85.035v-48.08l-14.825-5.989a2 2 0 011.499-3.709l16.076 6.494A2.001 2.001 0 0147 35.605V88a1.998 1.998 0 01-2 2z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={props.fill ?? color.black}
          fillRule="nonzero"
          opacity={1}
        />
        <Path
          d="M28.924 53.036c-.253 0-.507-.048-.749-.146l-9.441-3.813a2 2 0 01-1.251-1.854V25.297a2 2 0 011.251-1.854L60.326 6.64a2 2 0 011.498 0l9.441 3.814a2 2 0 010 3.708L30.924 30.46v20.576a2.002 2.002 0 01-2 2zm-7.441-7.162l5.441 2.198v-18.96a2 2 0 011.251-1.854L65.177 12.31l-4.103-1.657-39.591 15.993v19.228zM52.372 78.616a2 2 0 01-.75-3.856l9.44-3.813a2 2 0 011.499 3.709l-9.44 3.813c-.246.099-.5.147-.749.147zM52.372 71.526a2.001 2.001 0 01-.75-3.856l9.44-3.814a2.001 2.001 0 011.499 3.709l-9.44 3.814c-.246.1-.5.147-.749.147zM52.372 64.436a2 2 0 01-.75-3.856l9.44-3.813a2 2 0 011.499 3.709l-9.44 3.813c-.246.099-.5.147-.749.147z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={props.fill ?? color.black}
          fillRule="nonzero"
          opacity={1}
        />
      </G>
    </Svg>
  )
}
