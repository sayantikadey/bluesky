import { 
  View, 
  StyleSheet,
  Image,
  Text
} from 'react-native'
import React from 'react'

export default function Ireland({navigation}) {
  return (
    <View style={styles.container}>
       <Image 
     style={styles.tinyLogo}
     source={{uri:'https://blueskyeducation.co.in/wp-content/uploads/2022/02/blue-sky-logo.jpg'}} />

    <Text onPress={() =>navigation.navigate('Dublin')}
     style={styles.text1}>
    Dublin City University (Educo)</Text>


    <Text onPress={() =>navigation.navigate('Griffith')}
     style={styles.text2}>
     Griffith College, Ireland (Educo)</Text>

     <Text onPress={() =>navigation.navigate('IOT')}
     style={styles.text3}>
     Institute of Technology, Sligo (Educo), Ireland</Text>

     <Text onPress={() =>navigation.navigate('Maynooth')}
     style={styles.text4}>
     Maynooth University (Educo), Ireland (Educo)</Text>

     <Text onPress={() =>navigation.navigate('TCD')}
     style={styles.text5}>
     TCD - Trinity College Dublin, Ireland</Text>

     <Text onPress={() =>navigation.navigate('Techno')}
     style={styles.text6}>
     Technological University (Educo), Ireland</Text>



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position:'relative',
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

  text1: {
    color:'white',
    width:260,
    textAlign:'center',
    height:20,
    backgroundColor:"#0A3AE8",
    position: 'absolute',  
    left: 75,
    borderRadius:20,
    top:220,
  },


  text2: {
    color:'white',
    width:260,
    textAlign:'center',
    height:20,
    backgroundColor:"#0A3AE8",
    position: 'absolute',  
    left: 75,
    borderRadius:20,
    top:300,
  },

  text3: {
    color:'white',
    width:260,
    textAlign:'center',
    height:20,
    backgroundColor:"#0A3AE8",
    position: 'absolute',  
    left: 75,
    borderRadius:20,
    top:380,
  },

  text4: {
    color:'white',
    width:260,
    textAlign:'center',
    height:20,
    backgroundColor:"#0A3AE8",
    position: 'absolute',  
    left: 75,
    borderRadius:20,
    top:460,
  },

  text5: {
    color:'white',
    width:260,
    textAlign:'center',
    height:20,
    backgroundColor:"#0A3AE8",
    position: 'absolute',  
    left: 75,
    borderRadius:20,
    top:540,
  },

  text6: {
    color:'white',
    width:260,
    textAlign:'center',
    height:20,
    backgroundColor:"#0A3AE8",
    position: 'absolute',  
    left: 75,
    borderRadius:20,
    top:620,
  },
}
)