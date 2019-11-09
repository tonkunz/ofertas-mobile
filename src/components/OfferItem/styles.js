import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default styles = StyleSheet.create({
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
