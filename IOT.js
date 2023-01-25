import { 
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native'
import React from 'react'

export default function IOT() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Institute of Technology, Sligo, Educo,  Ireland </Text>

    <Image 
     style={styles.tinyLogo}
     source={{uri:'https://blueskyeducation.co.in/wp-content/uploads/2022/02/blue-sky-logo.jpg'}} />

    <Image
     style={styles.image}
     source={{uri:"https://educoglobal.com/app/uploads/2020/04/IT-Sligo_Colored-e1588314396328.png"}}
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
        bottom:270
      },

      image: {
        position: 'absolute',
        alignItems: 'center',
        height: 70,
        width: 230,
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