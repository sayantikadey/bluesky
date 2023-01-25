import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Apply() {
  return (
    <View>
      <Text style={styles.text}>You have applied this course</Text>
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

    text:{
    color:'blue',
    width:300,
    textAlign:'center',
    height:50,
    position: 'absolute', 
    borderRadius:20,
    right: 50,
    fontSize:25,
    top: 300,
    fontWeight:"bold"
    }
})
