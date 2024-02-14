import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import SquareScreen from "./SquareScreen";

const HomeScreen = ()=>{
    return <View style={styles.container}>
        <Text>Home Screen !!</Text>
       <SquareScreen></SquareScreen>
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