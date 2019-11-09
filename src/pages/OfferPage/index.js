import React from 'react'
import { Button, Text, View, AsyncStorage } from 'react-native'

import { getOffer } from '../../services/api'

class OfferPage extends React.Component {
  static navigationOptions = {
    headerTitle: 'Oferta específica'
  }

  state = {
    offer: {},
    isLoading: true
  }

  componentDidMount() {
    AsyncStorage.getItem('id').then(id =>
      getOffer(id).then(offer => this.setState({ offer, isLoading: false }))
    )
  }

  render() {
    // Navigation
    const { navigation } = this.props

    return (
      <View>
        {this.state.isLoading ? (
          <Text style={{ fontSize: 22 }}>..Loading Data..</Text>
        ) : (
          <View>
            <Text style={{ fontSize: 22 }}>{this.state.offer.title}</Text>
            <Button
              title="Efetuar Compra"
              onPress={() => navigation.navigate('CheckoutPage')}
            />
          </View>
        )}
      </View>
    )
  }
}

export default OfferPage
