import React from 'react';
import { View, Text } from 'react-native';
import { TitleStyle } from '../../styles';



const Title = ({ContainerStyle, ContentStyle, title}) => (<View style={ ContainerStyle || TitleStyle.TitleContainer}>
    <Text style={ContentStyle || TitleStyle.Title}> {title || 'not-found'} </Text>
</View>);


export { Title };