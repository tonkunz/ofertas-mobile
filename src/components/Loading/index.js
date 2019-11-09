import React from 'react'
import { ActivityIndicator, View, Text } from 'react-native'

import styles from './styles'

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#f0134d" />
      <Text style={styles.textLoading}>Carregando dados...</Text>
    </View>
  )
}
