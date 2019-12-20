import { StyleSheet } from 'react-native';



const ItemListStyle = StyleSheet.create({
  TitleContainer: { 
    marginTop: 15,
    marginBottom: 10 
  },
  Title: { 
    paddingTop: 12, 
    paddingBottom: 12, 
    paddingLeft: 25, 
    paddingRight: 25, 
    textAlign: 'center', 
    fontSize: 21, 
    color : 'white', 
    backgroundColor:'black',
    fontFamily: 'ample-soft-pro'
  },
  ListContainer: {
    flexDirection: 'column'
  }
});


export { ItemListStyle };