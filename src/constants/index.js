
/* root static text 📝 .. */



const HomeOptionsList = [
  {
    TextContent: 'CESAR CIPHER',
    Direction: 'Cipher',
    Params: {
      HeaderTitle: 'Cesar' 
    }
  },
  {
    TextContent: 'AFFINE CIPHER',
    Direction: 'Cipher',
    Params: {
      HeaderTitle: 'Affine' 
    }
  },
  {
    TextContent: 'TRANSPOSITION CIPHER',
    Direction: 'Cipher',
    Params: {
      HeaderTitle: 'Transposition' 
    }
  },
  {
    TextContent: 'VEGENERE CIPHER',
    Direction: 'Cipher',
    Params: {
      HeaderTitle: 'Vigenere' 
    }
  }
];

const HomeTitle = 'WELCOME TO OUR APP § V 1.0.0';

const __ENCRYPT__ = "ENCRYPT";

const __DECRYPT__ = "DECRYPT";

const PlaceholderContent = {
  Key: '  KEY .........................................',
  KeyA: '  KEY A .........................................',
  KeyB: '  KEY B .........................................',
  Text: '  Text .........................................'
};

const __CESAR__ = 'Cesar';

const __AFFINE__ = 'Affine';

const __VEGENERE__ = 'Vigenere';

const __TRANSPOSITION__ = 'Transposition';

const WarnValidation = 'Please, check your inputs 🤳🏼 ..';

const __ALPHABET_LENGTH__ = 26;


export { 
  HomeOptionsList,
  HomeTitle,
  PlaceholderContent,
  WarnValidation,
  __ENCRYPT__,
  __DECRYPT__,
  __CESAR__,
  __AFFINE__,
  __VEGENERE__,
  __TRANSPOSITION__,
  __ALPHABET_LENGTH__
};
