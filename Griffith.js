import { 
    View, 
    Text,
    StyleSheet,
    Image,
} from 'react-native'
import React from 'react'

export default function Griffith() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Griffith College, Ireland (Educo)</Text>

    <Image 
     style={styles.tinyLogo}
     source={{uri:'https://blueskyeducation.co.in/wp-content/uploads/2022/02/blue-sky-logo.jpg'}} />


    <Image
     style={styles.image}
     source={{uri:"https://www.griffith.ie/themes/custom/griffith2022/assets/logos/logo-2x-black.webp"}}
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
        height: 120,
        width: 300,
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
    }
    
})