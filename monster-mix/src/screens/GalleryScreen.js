import React, { useEffect, useState } from "react";
import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";
import GalleryItem from "../components/GalleryItem";

async function getStringValueFor(key, setter) {
    let result = await SecureStore.getItemAsync(key);
    console.log("GET result" + result);
    if (result) {
      setter(result);
    } else {
        console.log('no result');
    }
  };


const GalleryScreen = ()=>{
    const [firstMonster, setFirstMonster] = useState(null);
    const [firstMonsterString, setFirstMonsterString] = useState('');

    useEffect(()=>{
       getStringValueFor("userMonster", setFirstMonsterString);
       console.log("USE EFFECT" + firstMonsterString);
       const newMonster = JSON.parse(firstMonsterString);
       setFirstMonster(newMonster);
    }, []);

    const unPackMonster = (string)=>{

    };

    return (
        <ScrollView>
            <Text>Gallery Screen</Text>
            <GalleryItem></GalleryItem>
            <Text>{!firstMonsterString? "no monster found" : "yes there is a monster"}</Text>
            <View>
                {firstMonster? <Text>The monster is named {firstMonster.monsterName} and was made by {firstMonster.madeBy} and is a {firstMonster.compoundSpeciesName}</Text> : null}
            </View>        
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default GalleryScreen;