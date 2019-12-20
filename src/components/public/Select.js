import React from 'react';
import { Picker } from 'react-native';
import { __ENCRYPT__, __DECRYPT__ } from '../../constants';


const Select = ({ selectedValue, style, onValueChange }) => (<Picker
      selectedValue={selectedValue}
      style={style}
      onValueChange={onValueChange}>
    <Picker.Item label={__ENCRYPT__} value={__ENCRYPT__} />
    <Picker.Item label={__DECRYPT__} value={__DECRYPT__} />
</Picker>);

export { Select };