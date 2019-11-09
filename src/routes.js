import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import OffersList from './pages/OffersList'
import OfferPage from './pages/OfferPage'
import CheckoutPage from './pages/CheckoutPage'

const StackNavigator = createStackNavigator(
  {
    OffersList: { screen: OffersList },
    OfferPage: { screen: OfferPage },
    CheckoutPage: { screen: CheckoutPage }
  },
  {
    // headerTransitionPreset: 'uikit',
    // mode: 'modal',
  }
)

export default Routes = createAppContainer(StackNavigator)
