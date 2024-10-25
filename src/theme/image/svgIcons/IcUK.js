import React from 'react';
import Svg, { ClipPath, Defs, G, Mask, Path, Rect } from 'react-native-svg';

import { size } from '../../Size';

export const UK = props => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(25)}
      height={props.height ?? size.moderateScale(25)}
      viewBox="0 -4 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_503_2952)">
        <Rect width={28} height={20} rx={2} fill="#fff" />
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
          <Rect width={28} height={20} rx={2} fill="#fff" />
        </Mask>
        <G mask="url(#a)">
          <Path fill="#0A17A7" d="M0 0H28V20H0z" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-1.282-1.916l11.949 8.06v-7.477h6.666v7.476l11.95-8.06 1.49 2.211-9.447 6.373H28v6.666h-6.674l9.448 6.373-1.492 2.21-11.949-8.06v7.477h-6.666v-7.476l-11.95 8.06-1.49-2.211 9.447-6.373H0V6.667h6.674L-2.774.294l1.492-2.21z"
            fill="#fff"
          />
          <Path
            d="M18.668 6.332L31.333-2M20.013 13.697l11.354 7.653M8.006 6.31L-3.837-1.67M9.29 13.605L-3.837 22.31"
            stroke="#DB1F35"
            strokeWidth={0.666667}
            strokeLinecap="round"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 12h12v8h4v-8h12V8H16V0h-4v8H0v4z"
            fill="#E6273E"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_503_2952">
          <Rect width={28} height={20} rx={2} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
