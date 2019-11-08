import React from 'react'
import { Button, Text, View } from 'react-native'

class OfferPage extends React.Component {
  static navigationOptions = {
    headerTitle: 'Oferta específica'
  }

  render() {
    // Navigation
    const { navigation } = this.props

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'blue'
        }}
      >
        <Text>OfferPage</Text>
        <Button
          title="Página de Ofertas"
          onPress={() => navigation.navigate('CheckoutPage')}
        />
      </View>
    )
  }
}

export default OfferPage
