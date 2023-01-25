import { 
  View, 
  StyleSheet, 
  Image, 
  TextInput, 
  Text,
  Button, 
} from 'react-native';
import React, { useState } from 'react';

export default function Registration({navigation}) {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Age, setAge] = useState("");
  const [Address, setAddress] = useState("");
  const [Qualification, setQualification] = useState("");
  const [InterestedField, setInterestedField] = useState("");
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
        placeholder="Firstname"
        color="#0A3AE8"
        value={Firstname}
        onChangeText={(value) => setFirstname(value)}
      />

      <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="Lastname"
        color="#0A3AE8"
        value={Lastname}
        onChangeText={(value) => setLastname(value)}
      />

      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Age"
        color="#0A3AE8"
        value={Age}
        onChangeText={(value) => setAge(value)}
      />
       
       <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="Address"
        color="#0A3AE8"
        value={Address}
        onChangeText={(value) => setAddress(value)}
      />

      <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="Qualification"
        color="#0A3AE8"
        value={Qualification}
        onChangeText={(value) => setQualification(value)}
      />

      <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="Interested Field"
        color="#0A3AE8"
        value={InterestedField}
        onChangeText={(value) => setInterestedField(value)}
      />

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
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
      />  

      <Button 
      title="Register"
      color="#0A3AE8"
      onPress={() =>navigation.navigate('Service')}
      />
     
    <Text onPress={() =>navigation.navigate('Login')}
     style={styles.Text}>
    Already Have An Account? </Text>
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
    input: {
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#0A3AE8",
      backgroundColor: "white",
      padding: 8,
      width: 280,
      height: 40,
      margin: 10,
    },
    
    tinyLogo: {
      position: 'relative',
      alignItems: 'center',
      //justifyContent: 'center',
      height: 60,
      width: 78,
      //top: 100,
    },
    
    Text:{
        color:"#0A3AE8",
        width:260,
        textAlign:'center',
        height:20,
        //backgroundColor:'indigo',
        position: 'absolute',  
        left: 75,
        borderRadius:20,
        bottom:50,
      },
    

   


  });