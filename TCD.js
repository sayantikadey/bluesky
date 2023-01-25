import { 
    View, 
    Image,
    StyleSheet,
    Text } from 'react-native'
import React from 'react'

export default function TCD() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>TCD - Trinity College Dublin, Ireland</Text>

    <Image 
     style={styles.tinyLogo}
     source={{uri:'https://blueskyeducation.co.in/wp-content/uploads/2022/02/blue-sky-logo.jpg'}} />

    <Image 
     style={styles.image}
     source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkTm_XMNZoaDAM2DA5RGBDU0Dqtm8cK2Jr65ObskdLHdpkRDJEUjqLfrvjV1TnmUp_68&usqp=CAU'}} />

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
        bottom:270
      },

      image: {
        position: 'absolute',
        alignItems: 'center',
        height: 150,
        width: 250,
        top:350,
    },

    Text:{
        color:"#0A3AE8",
        width:260,
        textAlign:'center',
        height:20,
        position: 'absolute',  
        left: 75,
        borderRadius:20,
        top:250,
    },

})