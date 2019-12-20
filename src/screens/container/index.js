import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Header } from '../../components';
import { ContainerStyle } from '../../styles';



const Container = ({ children }) => (<View style={ContainerStyle.Container}>
      
        <Header />

        <ImageBackground source={require('../../assets/img/background.jpg')} style={ContainerStyle.ContentContainer} imageStyle={ContainerStyle.ImgStyle}>
            {children}
        </ImageBackground>
</View>);


export default Container;