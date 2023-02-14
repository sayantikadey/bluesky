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


    
    <Text onPress={() =>navigation.navigate('Ireland')}
     style={styles.Button1}>Ireland</Text>

    <Text onPress={() =>navigation.navigate('Ireland')}
     style={styles.Button2}>Canada</Text>

    <Text onPress={() =>navigation.navigate('Ireland')}
     style={styles.Button3}>Japan</Text>

    <Text onPress={() =>navigation.navigate('Ireland')}
     style={styles.Button4}>USA</Text>

    <Text onPress={() =>navigation.navigate('Ireland')}
     style={styles.Button5}>UK</Text>

    <Text onPress={() =>navigation.navigate('Ireland')}
     style={styles.Button6}>Australia</Text>
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
  
  
 
  Button1:{
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#f01d71',
    width:200,
    textAlign:"center",
    top:-50
  },
  Button2:{
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#f01d71',
    width:200,
    textAlign:"center",
    top:-10
  },
  Button3:{
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#f01d71',
    width:200,
    textAlign:"center",
    top:30
  },
  Button4:{
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#f01d71',
    width:200,
    textAlign:"center",
    top:60
  },
  Button5:{
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#f01d71',
    width:200,
    textAlign:"center",
    top:100
  },
  Button6:{
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#f01d71',
    width:200,
    textAlign:"center",
    top:130
  },
});