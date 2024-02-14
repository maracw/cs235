import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import ColorAdjuster from "./ColorScreen";

const HomeScreen = ()=>{
    return <View style={styles.container}>
        <Text>Home Screen !!</Text>
        <ColorAdjuster></ColorAdjuster>
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