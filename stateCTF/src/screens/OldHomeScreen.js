cs235/stateCTF/src/screensimport React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import SquareScreen from "./SquareScreen";
import ReducerScreen from "./ReducerScreen";
import ConventionScreen from "./ConventionScreen";
const HomeScreen = ()=>{
    return <View style={styles.container}>
        <Text>Home Screen !!</Text>
       <ConventionScreen />
    </View>
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default HomeScreen;