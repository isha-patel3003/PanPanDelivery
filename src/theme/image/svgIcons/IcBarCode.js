import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const BarCode = props => {
  return (
    <Svg
      fill={props.fill ?? color.primary}
      width={props.width ?? size.moderateScale(30)}
      height={props.height ?? size.moderateScale(30)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      xmlSpace="preserve"
      {...props}
    >
      <Path d="M6 48.5v-17a1 1 0 10-2 0v17a1 1 0 102 0zM56 48.5v-17a1 1 0 10-2 0v17a1 1 0 102 0zM9 30.5a1 1 0 00-1 1v9a1 1 0 102 0v-9a1 1 0 00-1-1zM12 30.5a1 1 0 00-1 1v9a1 1 0 102 0v-9a1 1 0 00-1-1zM18 40.5v-9a1 1 0 10-2 0v9a1 1 0 102 0zM21 40.5v-9a1 1 0 10-2 0v9a1 1 0 102 0zM24 40.5v-9a1 1 0 10-2 0v9a1 1 0 102 0zM30 40.5v-9a1 1 0 10-2 0v9a1 1 0 102 0zM35 31.5a1 1 0 10-2 0v9a1 1 0 102 0v-9zM38 31.5a1 1 0 10-2 0v9a1 1 0 102 0v-9zM42 30.5a1 1 0 00-1 1v9a1 1 0 102 0v-9a1 1 0 00-1-1zM45 30.5a1 1 0 00-1 1v9a1 1 0 102 0v-9a1 1 0 00-1-1zM51 41.5a1 1 0 001-1v-9a1 1 0 10-2 0v9a1 1 0 001 1zM4 11.5v14a1 1 0 102 0v-14a1 1 0 10-2 0zM56 25.5v-14a1 1 0 10-2 0v14a1 1 0 102 0zM8 25.5a1 1 0 102 0v-14a1 1 0 10-2 0v14zM12 26.5a1 1 0 001-1v-14a1 1 0 10-2 0v14a1 1 0 001 1zM17 26.5a1 1 0 001-1v-14a1 1 0 10-2 0v14a1 1 0 001 1zM20 26.5a1 1 0 001-1v-14a1 1 0 10-2 0v14a1 1 0 001 1zM23 26.5a1 1 0 001-1v-14a1 1 0 10-2 0v14a1 1 0 001 1zM29 26.5a1 1 0 001-1v-14a1 1 0 10-2 0v14a1 1 0 001 1zM34 26.5a1 1 0 001-1v-14a1 1 0 10-2 0v14a1 1 0 001 1zM37 26.5a1 1 0 001-1v-14a1 1 0 10-2 0v14a1 1 0 001 1zM42 26.5a1 1 0 001-1v-14a1 1 0 10-2 0v14a1 1 0 001 1zM45 26.5a1 1 0 001-1v-14a1 1 0 10-2 0v14a1 1 0 001 1zM51 26.5a1 1 0 001-1v-14a1 1 0 10-2 0v14a1 1 0 001 1zM9 44.5a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zM12 44.5a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zM15 44.5a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zM18 44.5a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zM21 44.5a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zM24 44.5a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zM27 44.5a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zM30 44.5a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zM33 44.5a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zM36 44.5a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zM39 44.5a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zM42 44.5a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zM45 44.5a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zM48 44.5a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zM52 45.5a1 1 0 10-2 0v1a1 1 0 102 0v-1zM8 53.5H2v-5a1 1 0 10-2 0v7h8a1 1 0 100-2zM59 47.5a1 1 0 00-1 1v5h-5a1 1 0 100 2h7v-7a1 1 0 00-1-1zM52 4.5a1 1 0 100 2h6v5a1 1 0 102 0v-7h-8zM1 12.5a1 1 0 001-1v-5h5a1 1 0 100-2H0v7a1 1 0 001 1zM59 27.5H1a1 1 0 100 2h58a1 1 0 100-2z" />
    </Svg>
  )
}