import React from 'react'
import { Button, Text, View } from 'react-native'

class CheckoutPage extends React.Component {
  static navigationOptions = {
    headerTitle: 'Efetuar compra'
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
          borderColor: 'purple'
        }}
      >
        <Text>CheckoutPage</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    )
  }
}

export default CheckoutPage
