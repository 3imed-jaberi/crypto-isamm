import React from 'react';
import { View, Image } from 'react-native';
import { HeaderStyle } from '../../styles';



const Header = () => (<View style={{ flex: 1 }}>
  <Image 
    source={require('../../assets/img/logo.png')} 
    style={HeaderStyle.ImgStyle}
  />
</View>);


export { Header };
