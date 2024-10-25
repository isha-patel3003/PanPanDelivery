import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const Question = props => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(30)}
      height={props.height ?? size.moderateScale(30)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16.5c-4.14 0-7.5-3.36-7.5-7.5 0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5 0 4.14-3.36 7.5-7.5 7.5zm2.3-11.8c.61.61.95 1.43.95 2.3 0 .87-.34 1.68-.95 2.3-.43.43-.97.73-1.55.86v.34c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1c0-.41.34-.75.75-.75A1.739 1.739 0 0013.75 10c0-.47-.18-.91-.51-1.24-.66-.66-1.81-.66-2.47 0-.33.33-.51.77-.51 1.24 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.87.34-1.68.95-2.3 1.23-1.23 3.37-1.23 4.6 0h-.01zM13 16.25c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"
        fill={props.fill ?? color.black}
      />
    </Svg>
  )
}
