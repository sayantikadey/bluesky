import { Button, Modal, StyleSheet, Text, View, Image, ScrollView, } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
import * as React from 'react';


export default function App({navigation}) {
  return (
    <View style={styles.container}>
    
      <Image
      style={styles.tinyLogo}
      source={{uri:'https://blueskyeducation.co.in/wp-content/uploads/2022/02/blue-sky-logo.jpg'}}
      />
      <Grid style={styles.box}>
      <Col size={50}>
          <Row style={styles.cell}>
            <Text style={styles.heading}>Course</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>MA in Childrens and Young Adult Literature</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>MA in Childrens and Young Adult Literature</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>MA in Childrens and Young Adult Literature</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>MA in Childrens and Young Adult Literature</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>MA in Childrens and Young Adult Literature</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>BEng. Mechanical and Sustainability Engineering</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bachelor of Arts Joint Honours (Humanities)</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bachelor of Arts [Joint Honours](Media studies)</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bachelor of Arts [Joint Honours](Languages)</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>BSc Computing for Business</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>MA in Childrens and Young Adult Literature</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Msc in Electronic and Computer Technology</Text>
          </Row>

          <Row style={styles.cell}>
            <Text>Msc in Electronic and Computer Technology</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Msc in Electronic and Computer Technology</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Msc in Electronic and Computer Technology</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Msc in Electronic and Computer Technology</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>BSc in Psychology and Mathematics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Common Entry into Engineering</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>BSc in Computer science </Text>
          </Row>
          <Row style={styles.cell}>
            <Text>MA in Childrens and Young Adult Literature</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Msc in Electronic and Computer Technology</Text>
          </Row>
          </Col>

          
        <Col size={25}>
          <Row style={styles.cell}>
            <Text>Intake</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep,Jan</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep,Jan</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>sep</Text>
          </Row>
        </Col>

        <Col size={28}>
          <Row style={styles.cell}>
            <Text>Duration</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>12 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>36 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>12 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>48 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>12 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>60 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>48 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>48 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>48 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>48 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>48 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>12 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>24 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>12 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>24 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>24 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>12 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>48 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>36 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>36 months</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>12 months</Text>
          </Row>
        </Col>

        <Col size={25}>
          <Row style={styles.cell}>
            <Text>Yearly Fees</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>12500</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>16000</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>15000</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>14500</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>15000</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>12500</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>15000</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>15000</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>12500</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>15000</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>18000</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>12000</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>12500</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>15000</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>12500</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>12000</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>15000</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>15500</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>12500</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>12500</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>16800</Text>
          </Row>
        </Col>


      
        <Col size={28}>
          <Row style={styles.cell}>
            <Text>Applica-tion</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          <Row style={styles.cell}>
            <Text onPress={() =>navigation.navigate('Apply')}>apply</Text>
          </Row>
          
        </Col>


      </Grid>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',
    height: '100%',
    padding: 10,
    backgroundColor: "white",
  },
  tinyLogo: {
    position: 'absolute',
    alignItems: 'center',
    height: 80,
    width: 98,
    top:50,
    left:160,
  },
  box:{
    top:50
  },
  cell: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top:80,
    padding:1,
  },
  heading:{
    fontWeight:"bold",
    fontSize:20
  },
});