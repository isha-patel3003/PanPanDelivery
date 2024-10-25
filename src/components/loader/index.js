import React from 'react';
import {StatusBar, View} from 'react-native';
import LottieView from 'lottie-react-native';

import { lottieIcons } from '../../theme';
import * as styles from './styles';

export const Loader = ({
  backgroundColor
}) => {
  return (
    <View style={styles.mainView(backgroundColor)}>
      <StatusBar backgroundColor={backgroundColor} translucent/>
      <LottieView
        source={lottieIcons.dottedLoader}
        autoPlay
        loop
        style={styles.lottieImage()}
      />
    </View>
  );
};