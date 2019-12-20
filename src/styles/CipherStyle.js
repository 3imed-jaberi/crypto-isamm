import { StyleSheet } from 'react-native';



const CipherStyle = StyleSheet.create({
  ButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    height: '12%',
    borderRadius: 5,
    backgroundColor: '#ce2058',
    marginTop: '5.5%',
  },
  ButtonContent: { 
    color: '#FFFFFF',
    fontSize: 21,
    // fontWeight: 'bold',
    fontFamily: 'ample-soft-pro'
  },
  SelectStyle: {
    height: 80, 
    width: 200, 
    alignSelf: 'center', 
    color: '#FFFFFF',
  },
  CipherTypeTitle: { 
    alignSelf: 'center', 
    color: '#ffffff', 
    fontSize: 20,
    fontFamily: 'ample-soft-pro',
    padding: 15
  }
});


export { CipherStyle };