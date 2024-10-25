import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import * as styles from './styles'

export const Header = ({
  title,
  leftIcon,
  renderLeftIcon,
  middleIcon,
  renderMiddleIcon,
  rightIcon,
  renderRightIcon,
  headerStyle,
  headerTitleStyle,
  headerTitlePosition,
  headerLeftIconPress,
  headerRightIconPress
}) => {
  return (
    <View style={[styles.container(), headerStyle]}>
      {
        leftIcon ? (
          <TouchableOpacity activeOpacity={0.5} style={styles.iconView()} onPress={headerLeftIconPress}>
            {renderLeftIcon()}
          </TouchableOpacity>
        ) : null
      }
      <View style={styles.middleView()}>
        {
          middleIcon ? (
            <View style={styles.iconView()}>
              {renderMiddleIcon()}
            </View>
          ) : null
        }
        {
          title ? (
            <View style={[headerTitlePosition, styles.titleView()]}>
              <Text style={[styles.title(), headerTitleStyle]}>{title}</Text>
            </View>
          ) : null
        }
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.iconView()} onPress={headerRightIconPress}>
        {
          rightIcon ? (
            renderRightIcon()
          ) : null
        }
      </TouchableOpacity>
    </View>
  )
}
