import React from 'react'
import { View, TextInput, Text } from 'react-native'

import * as styles from './styles'
import { color } from '../../theme'

export const InputBox = ({
  placeholder,
  value,
  onChangeText,
  autoCapitalize,
  secureTextEntry,
  autoComplete,
  keyboardType,
  maxLength,
  multiline,
  onBlur,
  onFocus,
  inputBoxStyles,
  error,
  editable,
  readOnly
}) => {
  return (
    <View style={[styles.container(), inputBoxStyles]}>
      <TextInput 
        style={styles.textInput(error)}
        placeholder={placeholder}
        placeholderTextColor={color.tertiaryTextColor}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        readOnly={readOnly}
        autoCapitalize={autoCapitalize ??  'none'}
        secureTextEntry={secureTextEntry}
        autoComplete={autoComplete}
        maxLength={maxLength}
        keyboardType={keyboardType}
        multiline={multiline}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <View style={styles.errorTextView()}>
        <Text style={styles.errorText()}>{error}</Text>
      </View>
    </View>
  )
}
