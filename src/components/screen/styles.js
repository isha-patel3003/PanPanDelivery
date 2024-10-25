import { StatusBar } from 'react-native';
import {color, size} from '../../theme';

export const full = (translucent) => ({
  flex: 1,
  marginTop: translucent ? size.moderateScale(StatusBar.currentHeight) - size.moderateScale(5) : 0,
});

export const mainContainer = (bgColor) => ({
  flex: 1,
  backgroundColor: bgColor ? bgColor : color.white,
});

export const container = (bgColor) => ({
    flex: 1,
    backgroundColor: bgColor ? bgColor : color.white,
    overflow: 'hidden',
})

export const containerFull = (translucent) => ({
    flex: 1,
    marginTop: translucent ? size.moderateScale(StatusBar.currentHeight) : 0
})
