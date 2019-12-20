import React from 'react';
import { TextInput } from 'react-native';
import { InputStyle } from '../../styles';



const Input  = (props) => (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor={ props.placeholderTextColor || 'black'}
      secureTextEntry={props.secureTextEntry || false}
      autoCorrect={props.secureTextEntry || false}
      autoCapitalize='none'
      onChangeText={props.onChangeText}
      style={InputStyle.Input} 
      { ...props }    
    />
);


export { Input };