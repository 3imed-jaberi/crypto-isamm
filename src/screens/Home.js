import React, { useState } from 'react';
import Container from './container';
import { ItemList } from '../components';
import { HomeOptionsList, HomeTitle } from '../constants';




const Home = ({ navigation }) => {

  const [options] = useState(HomeOptionsList);

  return (
    <Container>
      <ItemList navigation={navigation} title={HomeTitle} ContentData={options} />
    </Container>        
  );
}


export { Home };