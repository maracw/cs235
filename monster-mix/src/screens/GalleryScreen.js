import React, { useEffect, useState } from "react";
import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";
import GalleryItem from "../components/GalleryItem";


async function getValueFor(key, setter) {
    console.log(key);
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      await setter(result);
    } else {
        console.log('no result');
    }
  };

  async function getJsonObjectFromSecureStore (key, objSetter) {
    let result = await SecureStore.getItemAsync("fullMonster");
    if (result) {
        const obj = JSON.parse(result);
        await objSetter(obj);
    } else {
        console.log('no result');
    }
  };
  
const GalleryScreen = ()=>{
    const [firstMonster, setFirstMonster] = useState({});
    const[fullMonsterString, setFullMonsterString] = useState();


    useEffect(()=>{
        getJsonObjectFromSecureStore("fullMonster", setFirstMonster);
    }, []);

    return (<View>
        <Text>Try it</Text>
        <Text>{firstMonster.madeBy} and name {firstMonster.monsterName} is a {firstMonster.compoundName}</Text>
    </View>);
    {/*
    <ScrollView>
            <View style={styles.itemContainer}>
            <Text style={styles.titleStyle}>Gallery Screen</Text>
                {firstMonster.madeBy? <Text style={styles.nameStyle}>There is a monster and it was made by {firstMonster.madeBy}</Text> : null}
                {firstMonster.monsterName? <Text style={styles.monsterNameStyle}>and it is named {firstMonster.monsterName}</Text> : null}
                {firstMonster.compoundName? <Text style={styles.monsterTypeStyle}>and it is a {firstMonster.compoundName}</Text> : null}
            </View>
            <Text>The full monster string is</Text>
            <Text>{fullMonsterString? fullMonsterString : "no string found" }</Text>
        </ScrollView>
 */}
       
};

const styles = StyleSheet.create({
    itemContainer : {
        alignItems: 'center',
        borderWidth: 2,
        marginHorizontal: 10,
        padding: 10
    },
    titleStyle : {
        fontSize: 24, 
        marginBottom:15
    },
    nameStyle : {
        fontSize: 32, 
        fontWeight: 'bold'
    },
    monsterNameStyle : {
        fontSize: 30, 
        color: 'red'
    },
    monsterTypeStyle : {
        fontSize: 28, 
        color: 'brown',
        fontWeight: 'bold'
    },
});

export default GalleryScreen;