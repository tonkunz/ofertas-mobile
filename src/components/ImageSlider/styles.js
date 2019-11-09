import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default styles = StyleSheet.create({
  container: {
    marginTop: 1,
    marginBottom: 30
  },

  list: {
    paddingHorizontal: 5
  },

  listItem: {
    marginRight: 2
  },

  thumbnail: {
    width: width - 30,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 2
  }
})
