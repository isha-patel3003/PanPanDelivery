import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

import { size } from '../../Size'
import { color } from '../../Colors'

export const MotorBike = props => {
  return (
    <Svg
      fill={props.fill ?? color.black}
      width={props.width ?? size.moderateScale(20)}
      height={props.height ?? size.moderateScale(20)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <Path d="M465.587 351.332c-16.759-3.695-32.597-.179-45.269 7.885l-12.749-14.874c21.461-16.299 48.691-20.864 94.217-11.708a8.521 8.521 0 007.091-1.766 8.573 8.573 0 003.123-6.605c0-23.194-26.641-51.2-59.733-51.2-5.965 0-11.631.683-17.135 1.69-.725-58.155-10.965-84.523-45.099-118.656l-2.697-2.697c-10.991-10.948-18.398-18.423-23.748-29.491 11.162 2.594 23.74 4.07 37.299 4.087 4.779 0 8.713-3.755 8.713-8.533V51.198c0-4.634-3.721-8.525-8.354-8.533-44.638-.043-79.155 15.369-84.659 36.676l-55.415 23.748c-4.335 1.852-6.34 6.869-4.48 11.204a8.523 8.523 0 007.842 5.171c1.126 0 2.27-.222 3.362-.7l31.377-13.448c.06.154.034.316.102.461 37.419 86.383 45.124 142.891 23.578 172.757-16.973 23.526-53.53 33.229-114.347 30.106-5.282-.273-9.02-5.308-7.808-10.453 3.055-13.013 8.346-35.849 10.991-49.084 1.041-5.274-3.004-10.172-8.388-10.172H26.667c-2.79 0-5.478 1.297-7.014 3.635-4.062 6.17-7.612 13.577-10.539 21.965l-6.323 25.6A208.65 208.65 0 000 324.264c0 29.611 20.028 41.907 38.784 48.034-14.609 18.253-18.21 44.331-5.035 67.422 8.226 14.421 22.579 24.9 38.835 28.279 38.468 8.013 72.482-21.299 72.482-58.402 0-4.941-.811-9.762-1.997-14.507 23.569 3.191 46.473 4.89 68.873 4.89 47.531 0 92.996-7.279 138.752-21.658-.486 4.727-.828 9.472-.828 14.208a8.526 8.526 0 006.238 8.218 8.534 8.534 0 009.6-3.806c10.001-16.572 19.209-30.302 29.244-41.105l12.416 14.49c-11.187 12.774-17.092 30.285-14.037 49.143 3.934 24.26 23.108 44.143 47.258 48.751 41.907 7.987 78.165-28.177 70.34-70.076-4.301-23.022-22.477-41.77-45.338-46.813zM127.59 415.563c-2.398 17.886-16.589 32.777-34.355 35.985-31.428 5.675-58.24-23.347-48.563-55.194 2.185-7.202 6.613-13.542 12.22-18.56l.435-.393c11.383 3.081 22.622 5.922 33.63 8.371l-12.723 19.089c-2.62 3.917-1.562 9.225 2.364 11.836a8.496 8.496 0 004.727 1.434 8.517 8.517 0 007.108-3.797l16.555-24.832a638.258 638.258 0 0015.479 2.773l1.092 3.089c2.27 6.409 2.962 13.269 2.031 20.199zm313.302 35.217c-13.688-3.567-24.875-14.31-29.158-27.793-4.779-15.044-1.109-29.03 6.989-39.433l27.076 31.59a8.472 8.472 0 006.468 2.987 8.473 8.473 0 005.547-2.057c3.584-3.063 4.002-8.457.922-12.032l-27.068-31.582c10.351-5.769 23.031-7.825 36.762-2.27 12.612 5.103 22.374 16.239 25.378 29.508 7.167 31.66-21.147 59.359-52.916 51.082z" />
      <Path d="M190.985 187.731H47.949c-13.815 0-22.349 5.308-22.349 17.067v8.533a8.536 8.536 0 008.533 8.533H204.8a8.536 8.536 0 008.533-8.533v-8.533c0-11.759-8.533-17.067-22.348-17.067z" />
    </Svg>
  )
}