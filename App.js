import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import AppNavigator from './src';



const App = () => {

  const [isReady, setIsReady] = useState(false);


  const handleFinshLoading = () => setIsReady(true);


  const loadAssets = async () => {

    const cacheImages = (images) => images.map(image => (typeof image === 'string') ? Image.prefetch(image) : Asset.fromModule(image).downloadAsync());

    const cacheFonts = (fonts) => fonts.map(font => Font.loadAsync(font));


    const imageAssets = cacheImages([
      require('./src/assets/img/logo.png')
    ]);

    const fontAssets = cacheFonts([{
      'ample-soft-pro': require('./src/assets/fonts/Ample-Soft-Pro.otf')
    }]);


    await Promise.all([...fontAssets, ...imageAssets]);
  }

  return(
    !isReady 
        ? 
    <AppLoading
      startAsync={loadAssets}
      onFinish={handleFinshLoading}
      onError={console.warn}
    />
        :
    <AppNavigator />
  );    
}



export default App ;
