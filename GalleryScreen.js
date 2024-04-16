import React, { useEffect, useState } from "react";
import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";
import GalleryItem from "../components/GalleryItem";


async function getValueFor(key, setter) {
    console.log("KEY " + key);
    let result = await SecureStore.getItemAsync(key);
    if (result) {
       await setter(result);
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
    const[fullMonsterObj, setFullMonsterObj] = useState();
    
    let newMonster;
    
    useEffect( ()=>{
        getValueFor("madeBy", setMadeBy);
        getValueFor("monsterName", setMonsterName);
        getValueFor ("compoundName", setCompoundName);
        getValueFor("fullMonster", setFullMonsterString);
       //console.log("USE EFFect "+ monsterName);
       //console.log("USEEFFECT string " + fullMonsterString);
       if (fullMonsterString){
           newMonster = JSON.parse(fullMonsterString);
            console.log(newMonster);
       }
       //const newMonster = JSON.parse(fullMonsterString);
    }, []);


    const objectToStringify = {
        bestcast: "Figgy",
        bestdog: "Ralph"
    };
    

    console.log("before stringify : " + objectToStringify);

    const stringifiedObj = JSON.stringify(objectToStringify);

    console.log("stringified : "+ stringifiedObj);


    const parsedString = JSON.parse(stringifiedObj);

    console.log("AFTER parse :" + parsedString);

    
    //console.log("AFTER" + fullMonsterString);

    return (
        <ScrollView>
            <View style={styles.itemContainer}>
            <Text style={styles.titleStyle}>Gallery Screen</Text>
                {madeBy? <Text style={styles.nameStyle}>There is a monster and it was made by {madeBy}</Text> : null}
                {monsterName? <Text style={styles.monsterNameStyle}>and it is named {monsterName}</Text> : null}
                {compoundName? <Text style={styles.monsterTypeStyle}>and it is a {compoundName}</Text> : null}
            </View>
            <Text>{newMonster? newMonster.midIndex : "no new monster obj"}</Text>
            <Text>The full monster string is</Text>
            <Text style={styles.string}>{fullMonsterString? fullMonsterString : "no string found" }</Text>
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
    string : {
        fontSize:30,

    }
});

export default GalleryScreen;