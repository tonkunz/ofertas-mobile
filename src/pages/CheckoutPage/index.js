import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Alert,
  Button,
  StyleSheet
} from 'react-native'

class CheckoutPage extends React.Component {
  static navigationOptions = {
    headerTitle: 'Efetuar compra'
  }

  render() {
    // Navigation
    const { navigation } = this.props
    const id = navigation.getParam('id', 'Id perdido...')
    const title = navigation.getParam('title', 'Título perdido...')
    const price = navigation.getParam('price', 'Preço perdido...')

    return (
      <View style={styles.container}>
        <Text style={styles.label}>Detalhes do Produto: </Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.priceText}>
          Preço do produto: <Text style={styles.offerPrice}>R${price}</Text>
        </Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    )
  }
}

export default CheckoutPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20
  },

  label: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5
  },

  title: {
    fontSize: 16,
    marginBottom: 10
  },

  priceText: {
    fontSize: 16
  },

  offerPrice: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#f0134d',
    paddingBottom: 10
  },

  form: {}
})
