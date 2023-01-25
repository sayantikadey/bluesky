import { 
  View, 
  Button,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native'
import React, { useState } from 'react'


export default function Login({navigation}) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      
    <Image 
     style={styles.tinyLogo}
     source={{uri:'https://blueskyeducation.co.in/wp-content/uploads/2022/02/blue-sky-logo.jpg'}} />



   <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="Username"
        color="#0A3AE8"
        value={Username}
        onChangeText={(value) => setUsername(value)}
      />

    <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="Password"
        color="#0A3AE8"
        value={Password}
        onChangeText={(value) => setPassword(value)}
      />
     
     <Button 
      title="Login"
      color="#0A3AE8"
      onPress={() =>navigation.navigate('Service')}
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
  },

  input: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#0A3AE8",
    backgroundColor: "white",
    padding: 8,
    width: 280,
    height: 50,
    margin: 10,
  },
});