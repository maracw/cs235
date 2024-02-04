import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";



const petCnt = 7;

const personInfo = {
  name: 'Brody',
  age: 28,
}

function displayNameAge( {name, age}
) {
  return `Name is ${name}: ${age}`
}

const HomeScreen = ({navigation}) => {

  return <View>
    <Text style={styles.text}>This is a view. I have {petCnt} pets.</Text>
      <Button
        onPress={()=> navigation.navigate ('About')} 
        title='Go to About Screen' />

      <Button
        onPress={()=> navigation.navigate ('Components')} 
        title='Go to Components Screen' />
      
      <Button
        onPress={()=> navigation.navigate ('Image')} 
        title='Go to Image Screen' />
  </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
