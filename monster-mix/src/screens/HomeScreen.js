import React, { useEffect, useState } from "react";
import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
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
            <View style={styles.containerStyle}>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("Build")}>
                    <Text style={styles.buttonText}>Mix a new Monster</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("About")}>
                    <Text style={styles.buttonText}>About this app</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle :{
        marginHorizontal: 15,
        marginBottom: 30,
        flexDirection:"column",
        justifyContent: 'space-between',
       
    },
    buttonStyle : {
        borderWidth: 2,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: "pink",
        padding: 10,
        margin: 15,
       
    },
    buttonText : {
        color: 'blue',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default HomeScreen;