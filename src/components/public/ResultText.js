import React from 'react';
import { Text } from 'react-native';
import { ResultTextStyle } from '../../styles';



const ResultText = ({ result, displayResult }) =>  (displayResult ? <Text style={ResultTextStyle.TextContent}> {result} </Text> : null);


export { ResultText };