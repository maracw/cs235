import React, { useEffect, useState } from "react";
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";

//setter function for using SecureStorage
async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

//getter function for using SecureStorage
  async function getValueFor(key, setter) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      setter(result); 
    } else {
      setter("Friend"); // Set to "Friend" if no value is stored
      await save(key, "Friend"); // Optionally, save "Friend" as the default name
    }
  }
const HomeScreen = ()=>{
    const navigation = useNavigation(); 
    //create state variables for player name
    const [playerName, setPlayerName] = useState('');
    const [inputName, setInputName] = useState('');

    //useEffect on 1st render
    useEffect (()=>{
        getValueFor("name", setPlayerName);
    }, []);

    return (
        <View>
            <Text>Welcome to Mix-A-Monster</Text>
            <Text>Enter your name:</Text>
            <TextInput></TextInput>
            <Button title="Mix a new Monster" onPress={()=>navigation.navigate("Build")}></Button>
            <Button title="About this app" onPress={()=>navigation.navigate("About")}></Button>
        </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;