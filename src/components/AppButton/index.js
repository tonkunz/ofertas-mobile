import React from 'react'
import { ActivityIndicator, StyleSheet, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

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

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#1089ff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})
