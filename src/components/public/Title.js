import React from 'react';
import { View, Text } from 'react-native';
import { TitleStyle } from '../../styles';



const Title = ({ContainerStyle, ContentStyle, title}) => (<View style={[ TitleStyle.TitleContainer, ContainerStyle ]}>
  <Text style={[ TitleStyle.Title, ContentStyle ]}> {title || 'NOT-FOUND'} </Text>
</View>);


export { Title };