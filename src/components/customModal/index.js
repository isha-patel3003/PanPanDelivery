import React from 'react'
import { View, Text, Modal, TouchableWithoutFeedback, StatusBar, TouchableOpacity } from 'react-native'

import * as styles from './styles'
import { color, size } from '../../theme'

const statusbarHeight = StatusBar.currentHeight;

export const CustomModal = ({
  visible,
  onClose,
  modalStyle,
  animationType,
  children,
}) => {
  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={visible}
      statusBarTranslucent={true}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[styles.mainView(statusbarHeight), modalStyle]}>
          <TouchableWithoutFeedback>
          <View style={styles.modalContainer()}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
