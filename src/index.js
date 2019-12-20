
/* root naviagtion file 🚊 .. */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, Cipher } from './screens';



const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
      }
    },
    Cipher: {
      screen: Cipher,
      navigationOptions: {
        title: 'Cipher'
      }
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);


export default createAppContainer(AppNavigator) ;