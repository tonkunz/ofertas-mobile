import React from 'react'
import { View, Text, Image, AsyncStorage } from 'react-native'
import AppButton from '../AppButton'

import styles from './styles'

export default function OfferItem({ offer, navigation }) {
  function handleNextPage() {
    AsyncStorage.setItem('id', offer.id).then(() =>
      navigation.navigate('OfferPage')
    )
  }

  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={{ uri: offer.image.url }} />
      <View style={styles.infoContainer}>
        <Text style={styles.offerTitle}>{offer.title}</Text>
        <Text style={styles.offerPrice}>
          Por apenas:
          <Text style={styles.offerPriceNumber}> R${offer.price}</Text>
        </Text>
        <AppButton onPress={handleNextPage}>Saber mais...</AppButton>
      </View>
    </View>
  )
}
