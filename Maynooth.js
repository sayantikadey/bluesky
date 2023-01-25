import { 
    View, 
    Image,
    StyleSheet,
    Text } from 'react-native'
import React from 'react'

export default function Maynooth() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Maynooth University (Educo), Ireland (Educo)</Text>

    <Image 
     style={styles.tinyLogo}
     source={{uri:'https://blueskyeducation.co.in/wp-content/uploads/2022/02/blue-sky-logo.jpg'}} />

     <Image
     style={styles.image}
     source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPYNwhVkJaDKFNVeP-a4OYFv-5RG7Gr6PsFi0_yL2pSIUgQTmVbtQtoarmP6wCHkMVzzU&usqp=CAU"}}
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
        height: 100,
        width: 200,
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