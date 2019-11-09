import React from 'react'
import { Button, Text, View, AsyncStorage, ScrollView } from 'react-native'
import HTML from 'react-native-render-html'
import ImageSlider from '../../components/ImageSlider'
import Loading from '../../components/Loading'
import Hr from 'react-native-hr-component'

import styles from './styles'

import { getOffer } from '../../services/api'

class OfferPage extends React.Component {
  static navigationOptions = {
    headerTitle: 'Oferta específica',
    headerStyle: {
      backgroundColor: '#1089ff'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
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
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <ScrollView style={styles.container}>
            <ImageSlider images={offer.images} />
            <View style={styles.content}>
              <Text style={styles.title}>{offer.title}</Text>
              <HTML html={offer.description} style={styles.description} />
              <Hr lineColor="#eee" width={1} text="⥥" />
              <View style={styles.priceSession}>
                <Text styles={styles.offerText}>Preço de mercado:</Text>
                <Text style={styles.marketPrice}>R${offer.market_price}</Text>
                <Text styles={styles.offerText}>Preço da oferta:</Text>
                <Text style={styles.offerPrice}>R${offer.price}</Text>
              </View>
              <Button
                title="Efetuar Compra"
                onPress={() => {
                  navigation.navigate('CheckoutPage', {
                    id: offer.id,
                    title: offer.title,
                    price: offer.price
                  })
                }}
              />
            </View>
          </ScrollView>
        )}
      </>
    )
  }
}

export default OfferPage
