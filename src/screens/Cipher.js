import React, { useState, Fragment } from 'react';
import { ToastAndroid } from 'react-native';
import Container from './container';
import Loader from "react-native-modal-loader";
import { Input, Button, Select, ResultText, Title } from '../components';
import { 
  PlaceholderContent,
  WarnValidation,
  __ENCRYPT__, 
  __DECRYPT__, 
  __CESAR__, 
  __AFFINE__, 
  __VEGENERE__, 
  __TRANSPOSITION__,
  __ALPHABET_LENGTH__
} from '../constants';
import { 
  Cesar as CesarCipher,
  Vigenere as VigenereCipher, 
  Affine as AffineCipher,
  Transposition as TranspositionCipher
} from 'cryptography-isamm';
import { requiredNumeric, requiredString } from '../validation';
import { CipherStyle } from '../styles';



const Cipher = ({ navigation }) => {

  const [cipherType] = useState(navigation.getParam('HeaderTitle', 'NO-TITLE'));

  // Affine   
  const [keyA, setKeyA] = useState('');
  const [keyB, setKeyB] = useState('');
  // key used by vigenere / cesar cipher .. 
  const [key, setKey] = useState(''); 
  // text input .. 
  const [text, setText] = useState('');
  // operation choice .. 
  const [yourNeed, setYourNeed] = useState(__ENCRYPT__);
  // state management .. 
  const [displayResult, setDisplayResult] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [result, setResult] = useState('');

  // Events Handlers .. 
  const handleKeyInput = (data) => setKey(data);
  const handleTextInput = (data) => setText(data);

  // Affine .. 
  const handleKeyAInput = (data) => setKeyA(data);
  const handleKeyBInput = (data) => setKeyB(data);

  const handleSelectInput = (itemValue) => setYourNeed(itemValue);

  // validation method .. 
  const validation = () => {
    switch (cipherType) {
      case __CESAR__:
        return (requiredNumeric(key) && requiredString(text) && (+key < __ALPHABET_LENGTH__));
      case __AFFINE__:
        return (requiredNumeric(keyA) && requiredNumeric(keyB) && requiredString(text) && (+keyB < __ALPHABET_LENGTH__) && (+keyA < __ALPHABET_LENGTH__));
      case __VEGENERE__:
        return (requiredString(key) && requiredString(text));
      case __TRANSPOSITION__:
        return (requiredString(key) && requiredString(text));
      default:
        return false;
    }
  }

  const handleClick = (event) => {
    event.preventDefault();
    setShowLoading(true); 

    if(validation()){
      let res;

      // result of cipher algo .. 
      switch (cipherType) {
        case __CESAR__:
          res = yourNeed === __ENCRYPT__ ? CesarCipher(text,+key) : CesarCipher(text, +(`-${key}`));
          break;
        case __VEGENERE__:
          res = VigenereCipher(text,key,yourNeed);
          break;
        case __AFFINE__: 
          res = AffineCipher(text,+keyA,+keyB,yourNeed);
          break;
        case __TRANSPOSITION__: 
          res = TranspositionCipher(text,key,yourNeed);
          break;
        default:
          break;
      }
  
      setResult(res);
      setTimeout(() => {
        setShowLoading(false);
        setDisplayResult(true);
        setKey('');
        setKeyA(''); 
        setKeyB('');
        setText('');
        setTimeout(() => setDisplayResult(false),4500);
      },500);
    }else{
      setShowLoading(false);
      ToastAndroid.showWithGravity(WarnValidation, ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
  }


  return (
    <Container>

      <Title 
        ContainerStyle={CipherStyle.TitleContainer} 
        ContentStyle={CipherStyle.TitleStyle} 
        title={`< ${cipherType} Cipher 🗝 />`.toUpperCase()} 
      />

      <Select 
        selectedValue={yourNeed}
        style={CipherStyle.SelectStyle}
        onValueChange={handleSelectInput}
      />

    { cipherType === __AFFINE__ 
                  ? 
          <Fragment>
            <Input
              defaultValue={keyA}
              placeholder={PlaceholderContent.KeyA}
              onChangeText={handleKeyAInput} 
            />

            <Input
              defaultValue={keyB}
              placeholder={PlaceholderContent.KeyB}
              onChangeText={handleKeyBInput} 
            />
          </Fragment>
                  :       
          <Input
            defaultValue={key}
            placeholder={PlaceholderContent.Key}
            onChangeText={handleKeyInput} 
          /> }

      <Input
        defaultValue={text}
        placeholder={PlaceholderContent.Text}
        onChangeText={handleTextInput} 
      />

      <ResultText result={result} displayResult={displayResult} />


      <Loader loading={showLoading} color="#ff66be" size='large' />

      <Button 
        onPress={handleClick}
        content={ yourNeed === __ENCRYPT__ ? __ENCRYPT__ : __DECRYPT__ }
        ButtonStyle={CipherStyle.ButtonStyle}
        ContentStyle={CipherStyle.ButtonContent}
      />

    </Container>        
  )
}


export { Cipher };