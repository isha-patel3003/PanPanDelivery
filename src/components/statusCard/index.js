import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'

import * as styles from './styles'

export const StatusCard = ({
  bgColor,
  title,
  bodyText,
  onPress,
  loading,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.mainView(bgColor)}>
      {
        loading
          ? <ActivityIndicator size="large" color="#fff" />
          : (
            <>
              <Text style={styles.cardTitle()}>{title}</Text>
              <Text style={styles.cardBody()}>{bodyText}</Text>
            </>
          )
      }

    </TouchableOpacity>
  )
}
