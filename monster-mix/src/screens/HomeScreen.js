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

    const changeName = async () => {
        if (inputName.trim() !== '') {
          await save("name", inputName); 
          setPlayerName(inputName);
          setInputName('');
        }
      };
    //could these buttons be a reusable component for easier styling?
    console.log(playerName);
    return (
        <View style={styles.container}>
            <Text>Welcome {playerName}</Text>
            <Text>Enter your name:</Text>
            <TextInput 
             style={styles.input}
             onChangeText={setInputName}
             value={inputName}
             placeholder="Enter a new name"></TextInput>
             <Button title="Change Name" onPress={changeName} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyle} 
                    onPress={()=>navigation.navigate("Build", { playerName: playerName })}>
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
    buttonContainer :{
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
    }, 
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderColor: 'gray',
      },
});

export default HomeScreen;