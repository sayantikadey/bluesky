import { 
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Text } from 'react-native'
import React from 'react'

export default function Service({navigation}) {
  return (
    <View style={styles.container}>

    <Image 
     style={styles.tinyLogo}
     source={{uri:'https://blueskyeducation.co.in/wp-content/uploads/2022/02/blue-sky-logo.jpg'}} />


    
    <Button 
      title="Ireland"
      color="#0A3AE8"
      onPress={() =>navigation.navigate('Ireland')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  
  tinyLogo: {
    position: 'relative',
    alignItems: 'center',
    height: 80,
    width: 98,
    bottom:100,
  },
  
  
 
  Button:{
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#f01d71'
  },
  
  
});