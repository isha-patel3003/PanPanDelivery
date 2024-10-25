import React, { forwardRef } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { size } from '../../theme';


export const CustomBottomSheet = forwardRef(({
  draggable,
  dragOnContent,
  height,
  customModalProps,
  customStyles,
  closeOnPressMask,
  onOpen,
  onClose,
  children
}, ref) => {

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, zIndex: size.moderateScale(1000) }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <RBSheet
        ref={ref}
        draggable={draggable}
        dragOnContent={dragOnContent}
        height={height}
        customModalProps={customModalProps}
        customStyles={customStyles}
        closeOnPressMask={closeOnPressMask}
        closeOnPressBack={false}
        openDuration={250}
        useNativeDriver={false}
        onOpen={onOpen}
        onClose={onClose}
      >
        <View style={{ flexGrow: 1, flex: 1, zIndex: size.moderateScale(10000) }}>
          {children}
        </View>
      </RBSheet>
    </KeyboardAvoidingView>
  );
});