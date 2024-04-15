import React, { useEffect, useState } from "react";
import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";
import GalleryItem from "../components/GalleryItem";


//from eatonPhil's 2018 Medium Post "writing a simple json parser"
//constants 
JSON_COMMA = ',';
JSON_COLON = ':';
JSON_LEFTBRACKET = '[';
JSON_RIGHTBRACKET = ']';
JSON_LEFTBRACE = '{';
JSON_RIGHTBRACE = '}';
JSON_QUOTE = '"';

JSON_QUOTE = '"';
JSON_WHITESPACE = [' ', '\t', '\b', '\n', '\r'];
JSON_SYNTAX = [JSON_COMMA, JSON_COLON, JSON_LEFTBRACKET, JSON_RIGHTBRACKET,
               JSON_LEFTBRACE, JSON_RIGHTBRACE];

const GalleryScreen = ()=>{
    const [firstMonster, setFirstMonster] = useState(null);
    const [firstMonsterString, setFirstMonsterString] = useState('');

    // getUsers = () => {
    //     fetch('https://jsonplaceholder.typicode.com/users/')
    //       .then((response) => response.json())
    //       .then((json) => setUsers(json))
    //       .catch((error) => console.error(error))
    //       .finally(() => setLoading(false));
    // }

    //my code for a url parser

    //     return kvp;       
    // } 
    const homemadeParser =(jsonString) =>{
        let workingString ="";
        if(jsonString[0]==JSON_LEFTBRACE){
            workingString=jsonString.substring(1);
        }
        if (workingString[workingString.length-1]==JSON_RIGHTBRACE){
            workingString= workingString.substring(0,workingString.length-1);
        }

        console.log("pre parser" + workingString);
        let params = workingString.split(',');
        console.log(params);
        const stringTry = params[0].toString();
        console.log(stringTry);
        let kvp ={};
        
        params.forEach(element => {
         let[key, value] =element.split(':');
    
         console.log(typeof(key));
         kvp [key] = value;
        console.log(kvp);
        });
        // console.log(workingString);
       return kvp;
    };
    useEffect(()=>{
       getStringValueFor("userMonster", setFirstMonsterString);
       //console.log("line 24");
       console.log("USE EFFECT" + firstMonsterString);
       let newMonster =homemadeParser(firstMonsterString);
      console.log(newMonster);
       //console.log(firstMonster);
       //setFirstMonster(newMonster);
    }, []);

    async function getStringValueFor(key, setter) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
          setter(result);
          console.log("GET result" + result);
          //unPackMonster(result);
        } else {
            console.log('no result');
        }
      };
    // useEffect(async ()=>{
    //     let result = await SecureStore.getItemAsync("userMonster");
    //     console.log("result " + result);
    //     const newMonster = JSON.parse(result);
    //     setFirstMonsterString(result);
    //     //setFirstMonster(newMonster);
    //  }, []);


    return (
        <ScrollView>
            <Text>Gallery Screen</Text>
            <Text>{!firstMonsterString? "no monster found" : "yes there is a monster"}</Text>
            <View>
                {firstMonster? <Text>The monster is named {firstMonster.monsterName} and was made by and is a {firstMonster.compoundName}</Text> : null}
            </View>
            <View>
                {firstMonster?  <GalleryItem monsterItem={firstMonster}></GalleryItem> : null}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default GalleryScreen;