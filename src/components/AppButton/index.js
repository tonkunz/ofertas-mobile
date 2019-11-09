import React from 'react'
import { ActivityIndicator, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

export default function Button({ children, loading, ...rest }) {
  return (
    <RectButton style={styles.container} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text style={styles.btnText}>{children}</Text>
      )}
    </RectButton>
  )
}
