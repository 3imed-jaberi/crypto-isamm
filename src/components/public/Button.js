import React from 'react';
import { TouchableHighlight, Text } from 'react-native';



const Button = ({ onPress, content, ButtonStyle, ContentStyle }) => (
  <TouchableHighlight style={ButtonStyle} onPress={onPress}>
    <Text style={ContentStyle}> {content} </Text>
  </TouchableHighlight>
);


export { Button }; 