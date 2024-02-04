import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen = ({navigation}) => {

  return <View>
    <Text style={styles.titleText}>Hiker's Guide</Text>
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText} 
        onPress={()=> navigation.navigate ('Local')}>Local Hikes</Text>
    </TouchableOpacity>
    <Button title = "Local Hikes Button" 
      style={styles.buttonContainer} onPress={()=> navigation.navigate ('Local')}></Button>
  </View>

};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 22,
    margin: 10,
    fontWeight : 'bold'
  },
  buttonContainer : {
    color: '#fff',
    backgroundColor: '#228B22', 
    margin: 10
  },
  buttonText: {
    fontSize: 28,
    textTransform : 'uppercase',
    color: '#fff',
    textAlign: 'center',
    padding: 10
  },
});

export default HomeScreen;
