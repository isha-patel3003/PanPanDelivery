import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const Language = props => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(20)}
      height={props.height ?? size.moderateScale(20)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path 
        fill={props.fill ?? color.black}
        d="M8 15H3.5A2.502 2.502 0 011 12.5v-9A2.502 2.502 0 013.5 1h9A2.502 2.502 0 0115 3.5V8h-1V3.5A1.502 1.502 0 0012.5 2h-9A1.502 1.502 0 002 3.5v9A1.502 1.502 0 003.5 14H8zm-.038-4.811a9.77 9.77 0 01-3.766 1.796l-.242-.97a8.816 8.816 0 003.282-1.532A9.264 9.264 0 014.888 5H4V4h3.279l-.544-.544.707-.707L8.692 4H12v1h-.914A9.836 9.836 0 019.78 8.152a3.853 3.853 0 00-1.82 2.037zm.032-1.383A8.167 8.167 0 0010.058 5H5.922a8.18 8.18 0 002.072 3.806zM23 20.447v-8.894A2.525 2.525 0 0020.484 9h-8.931A2.556 2.556 0 009 11.553v8.894A2.556 2.556 0 0011.553 23h8.894A2.556 2.556 0 0023 20.447zM20.484 10A1.517 1.517 0 0122 11.516v8.968A1.517 1.517 0 0120.484 22h-8.968A1.517 1.517 0 0110 20.484v-8.968A1.517 1.517 0 0111.516 10zm-2.086 8h-4.796l-1.159 2.23-.886-.46L16 11.215l4.443 8.555-.886.46zm-.52-1L16 13.385 14.122 17z" />
      <Path fill="none" d="M0 0h24v24H0z" />
    </Svg>
  )
}
