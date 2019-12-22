import { StyleSheet } from 'react-native';



const ItemListStyle = StyleSheet.create({
  TitleContainer: { 
    marginTop: 30,
    marginBottom: 25,
    opacity: 0.85,
    backgroundColor:'#0f0f0f'
  },
  Title: { 
    paddingTop: 12, 
    paddingBottom: 12, 
    paddingLeft: 25, 
    paddingRight: 25, 
    textAlign: 'center', 
    fontSize: 18, 
    color : 'white', 
    fontFamily: 'ample-soft-pro',
  },
  ListContainer: {
    flexDirection: 'column'
  }
});


export { ItemListStyle };