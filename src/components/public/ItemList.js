import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import { BtnItem } from '../private/BtnItem';
import { ItemListStyle } from '../../styles';



const ItemList = ({ navigation, title, ContentData }) => {

  const handleClick = (direction, params) => {
    navigation.navigate(direction, params);
  }

  return (
    <Fragment>
      <View style={ItemListStyle.TitleContainer}>
        <Text style={ItemListStyle.Title}> {title} </Text>
      </View>
      <View style={ItemListStyle.ListContainer}>
        { ContentData.map( ({ Direction, Params, TextContent }, index) => <BtnItem key={index} onClick={() => handleClick(Direction, Params)} text={TextContent} />) }
      </View>  
    </Fragment>
  );
}


export { ItemList };