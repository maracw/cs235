import React, { useEffect, useState } from "react";
import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";
import GalleryItem from "../components/GalleryItem";


async function getValueFor(key, setter) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      setter(result);
    } else {
        console.log('no result');
    }
  };

const GalleryScreen = ()=>{
    //const [firstMonster, setFirstMonster] = useState(null);
    const [madeBy, setMadeBy] = useState();
    const [monsterName, setMonsterName] = useState();
    const [compoundName, setCompoundName] = useState();
    const[fullMonsterString, setFullMonsterString] = useState();

    useEffect(()=>{
       getValueFor("madeBy", setMadeBy);
       getValueFor("monsterName", setMonsterName);
       getValueFor ("compoundName", setCompoundName);
       getValueFor("fullMonster", setFullMonsterString);
    }, []);

    return (
        <ScrollView>
            <View style={styles.itemContainer}>
            <Text style={styles.titleStyle}>Gallery Screen</Text>
                {madeBy? <Text style={styles.nameStyle}>There is a monster and it was made by {madeBy}</Text> : null}
                {monsterName? <Text style={styles.monsterNameStyle}>and it is named {monsterName}</Text> : null}
                {compoundName? <Text style={styles.monsterTypeStyle}>and it is a {compoundName}</Text> : null}
            </View>
            <Text>The full monster string is</Text>
            <Text>{fullMonsterString? fullMonsterString : "no string found" }</Text>
        </ScrollView>
    );
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