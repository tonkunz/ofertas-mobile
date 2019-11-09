import React from 'react'
import { View, FlatList } from 'react-native'
import OfferItem from '../../components/OfferItem'

import { getOffers } from '../../services/api'

class OffersList extends React.Component {
  state = {
    offers: []
  }

  componentDidMount() {
    getOffers().then(offers => this.setState({ offers: [...offers] }))
    console.log('State: ', this.state)
  }

  static navigationOptions = {
    headerTitle: 'Lista de Ofertas'
  }

  renderItem = ({ item }) => {
    return <OfferItem navigation={this.props.navigation} offer={item} />
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.offers}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

export default OffersList
