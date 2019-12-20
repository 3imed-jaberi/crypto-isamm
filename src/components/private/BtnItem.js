import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { BtnItemStyle } from '../../styles'


const BtnItem = ({ text, onClick }) => (<TouchableHighlight onPress={onClick} style={BtnItemStyle.Container}> 
  <Text style={BtnItemStyle.TextStyle}> {text} </Text> 
</TouchableHighlight>);


export { BtnItem }; 