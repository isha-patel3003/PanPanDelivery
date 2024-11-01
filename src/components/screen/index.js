import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Loader} from '../loader';
import { color } from '../../theme';
import * as styles from './styles';


export const Screen = ({
    children,
    withScroll,
    style,
    bgColor,
    scrollStyle,
    scrollRef,
    onScrolling,
    keyboardShouldPersistTaps,
    extraScrollHeight,
    loading,
    loadingBgColor,
    translucent,
    scrollEnabled,
    refreshControl,
    ...props
}) => {

  if (withScroll) {
    return (
      <SafeAreaView style={styles.mainContainer(bgColor)}>
        <StatusBar
          translucent={translucent}
          backgroundColor={bgColor ?? color.primary}
          barStyle={bgColor ? 'dark-content' : 'light-content'}
        />
        {loading && <Loader backgroundColor={loadingBgColor} />}
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
          contentContainerStyle={scrollStyle}
          showsVerticalScrollIndicator={false}
          bounces={false}
          onScroll={onScrolling}
          innerRef={scrollRef}
          scrollEventThrottle={16}
          extraScrollHeight={extraScrollHeight}
          enableOnAndroid={true}
          alwaysBounceVertical={false}
          scrollEnabled={scrollEnabled}
          refreshControl={refreshControl}
          {...props}>
          <View style={styles.full(translucent)}>{children}</View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.container(bgColor)}>
          <StatusBar
            translucent={translucent}
            backgroundColor={bgColor ?? color.primary}
            barStyle={bgColor ? 'dark-content' : 'light-content'}
          />
          {loading && <Loader backgroundColor={loadingBgColor} />}
          <View style={styles.containerFull(translucent)}>{children}</View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
};