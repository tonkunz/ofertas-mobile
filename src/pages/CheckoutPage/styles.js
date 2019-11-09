import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    paddingBottom: 50
  },

  label: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5
  },

  title: {
    fontSize: 16,
    marginBottom: 10
  },

  offerPrice: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    color: '#f0134d',
    marginBottom: 10
  },

  form: {
    alignSelf: 'stretch'
  },

  largeImput: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 10,
    borderRadius: 2
  },

  expAndCvc: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
