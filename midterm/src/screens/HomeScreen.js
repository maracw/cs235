import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

/*color property in Button set to white for iPhone styling, background color set inside styles.buttonContainer*/ 

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.titleText}>Hiker's Guide</Text>
    <View style={styles.buttonContainer} >
      <Button title = "Local Hikes" 
      onPress={()=> navigation.navigate ('Local')}
      color = '#fff'></Button>
    </View>
    <View style={styles.buttonContainer} >
      <Button title = "Favorite Hike" 
      onPress={()=> navigation.navigate ('Favorite')}
      color = '#fff'></Button>
    </View>
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
