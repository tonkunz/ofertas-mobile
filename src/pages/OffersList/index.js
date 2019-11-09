import React from 'react'
import { View, FlatList } from 'react-native'
import OfferItem from '../../components/OfferItem'
import Loading from '../../components/Loading'

import { getOffers } from '../../services/api'

class OffersList extends React.Component {
  state = {
    offers: [],
    isLoading: true
  }

  componentDidMount() {
    getOffers().then(offers =>
      this.setState({ offers: [...offers], isLoading: false })
    )
  }

  static navigationOptions = {
    headerTitle: 'Lista de Ofertas',
    headerStyle: {
      backgroundColor: '#1089ff'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }

  renderItem = ({ item }) => {
    return <OfferItem navigation={this.props.navigation} offer={item} />
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={this.state.offers}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    )
  }
}

export default OffersList
