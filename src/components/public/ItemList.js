import React, { Fragment } from 'react';
import { View } from 'react-native';
import { BtnItem } from '../private/BtnItem';
import { ItemListStyle } from '../../styles';
import { Title } from './Title';



const ItemList = ({ navigation, title, ContentData }) => {

  const handleClick = (direction, params) => {
    navigation.navigate(direction, params);
  }

  return (
    <Fragment>
      <Title title={title} />
      <View style={ItemListStyle.ListContainer}>
        { ContentData.map( ({ Direction, Params, TextContent }, index) => <BtnItem key={index} onClick={() => handleClick(Direction, Params)} text={TextContent} />) }
      </View>  
    </Fragment>
  );
}


export { ItemList };