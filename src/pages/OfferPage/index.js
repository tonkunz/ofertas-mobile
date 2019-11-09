import React from 'react'
import {
  Button,
  Text,
  View,
  AsyncStorage,
  StyleSheet,
  ScrollView
} from 'react-native'
import ImageSlider from '../../components/ImageSlider'

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
    const { navigation } = this.props
    const { isLoading, offer } = this.state

    return (
      <View>
        {isLoading ? (
          <Text style={{ fontSize: 22 }}>..Loading Data..</Text>
        ) : (
          <ScrollView>
            <ImageSlider images={offer.images} />
            <Text style={{ fontSize: 22 }}>{offer.title}</Text>
            <Text style={{ fontSize: 16 }}>{offer.description}</Text>
            <Text>Preço: R${offer.price}</Text>
            <Button
              title="Efetuar Compra"
              onPress={() => navigation.navigate('CheckoutPage')}
            />
          </ScrollView>
        )}
      </View>
    )
  }
}

export default OfferPage
