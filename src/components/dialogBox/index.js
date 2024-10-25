import React, { useContext } from 'react'
import { View, Text, Modal, TouchableWithoutFeedback, StatusBar, TouchableOpacity } from 'react-native'

import { LocalizationContext } from '../../context';
import { color } from '../../theme';
import * as styles from './styles'

const statusbarHeight = StatusBar.currentHeight;

export const DialogBox = ({
  visible,
  animationType,
  onNoPress,
  onYesPress,
  title,
  message,
}) => {

  const { t } = useContext(LocalizationContext);

  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={visible}
      statusBarTranslucent={true}
      onRequestClose={onNoPress}>
      <TouchableWithoutFeedback onPress={onNoPress}>
        <View style={styles.mainView(statusbarHeight)}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer()}>
              <View style={styles.modalHeader()}>
                <Text style={styles.modalTitle()}>{title}</Text>
              </View>
              <View style={styles.modalContent()}>
                <Text style={styles.modalMsg()}>{message}</Text>
                <View style={styles.buttonContainer()}>
                  <TouchableOpacity onPress={onYesPress} style={[styles.buttonView(), {backgroundColor: color.white}]}>
                    <Text style={[styles.buttonText(), {color: color.black}]}>{t("dialog_component.button_text_1")}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onNoPress} style={styles.buttonView()}>
                    <Text style={styles.buttonText()}>{t("dialog_component.button_text_2")}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
