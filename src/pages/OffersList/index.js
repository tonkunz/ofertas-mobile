import React from 'react'
import { Button, Text, View } from 'react-native'

class OffersList extends React.Component {
  static navigationOptions = {
    headerTitle: 'Lista de Ofertas'
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
          borderColor: 'teal'
        }}
      >
        <Text>OffersList</Text>
        <Button
          title="Página de Ofertas"
          onPress={() => navigation.navigate('OfferPage')}
        />
      </View>
    )
  }
}

export default OffersList
