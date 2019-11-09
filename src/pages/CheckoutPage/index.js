import React from 'react'
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  Button
} from 'react-native'
import Hr from 'react-native-hr-component'

import styles from './styles'

class CheckoutPage extends React.Component {
  static navigationOptions = {
    headerTitle: 'Efetuar compra',
    headerStyle: {
      backgroundColor: '#1089ff'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }

  render() {
    // Navigation
    const { navigation } = this.props
    const title = navigation.getParam('title', 'Título perdido...')
    const price = navigation.getParam('price', 'Preço perdido...')

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.label}>Detalhes do Produto: </Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.offerPrice}>R${price}</Text>
        <Hr lineColor="#eee" width={1} text="⥥" />
        <Text style={styles.label}>Pagamento: </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.largeImput}
            placeholder="Número do cartão"
            placeholderTextColor="#555555"
            textContentType="creditCardNumber"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.largeImput}
            placeholder="Nome no cartão"
            placeholderTextColor="#555555"
            textContentType="name"
            autoCorrect={false}
          />
          <View style={styles.expAndCvc}>
            <TextInput
              style={styles.largeImput}
              placeholder="Data de Validade"
              placeholderTextColor="#555555"
            />
            <TextInput
              style={styles.largeImput}
              placeholder="CVC"
              placeholderTextColor="#555555"
              keyboardType="numeric"
            />
          </View>
        </View>
        <Button title="Efetuar Compra" onPress={() => alert('Just test...')} />
      </KeyboardAvoidingView>
    )
  }
}

export default CheckoutPage
