import React from 'react'
import { View, Text, Image, StyleSheet, Button, Dimensions } from 'react-native'
import AppButton from '../AppButton'

export default function OfferItem({ offer, navigation }) {
  function handleNextPage() {
    console.log('Go Next')
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

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center'
  },

  thumbnail: {
    width: width - 30,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 2
  },

  infoContainer: {
    width: width - 30
  },

  offerTitle: {
    fontSize: 18,
    marginTop: 10
  },

  offerPrice: {
    fontSize: 18,
    paddingTop: 5,
    textAlign: 'center',
    paddingBottom: 5
  },

  offerPriceNumber: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#f0134d'
  }
})

// onPress={() => navigation.navigate('OfferPage')
