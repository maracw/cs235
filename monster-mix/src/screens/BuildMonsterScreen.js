import React, {useState, useReducer} from "react";
import {Text, View, ScrollView, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";
import BodyPart from "../components/BodyPart";
import {topMonsterParts, midMonsterParts, bottomMonsterParts} from '../data/monsterPartList';
import MainButton from "../components/MainButton";

const LIST_LENGTH = 4;
const INCREMENT = 1;

const reducer = (state, action) => {
    //console.log(state.mid + action.payload);

    switch(action.type) {
        case 'change_top_next':
            return {...state, top: state.top + action.payload};
        case 'change_top_prev':
            return {...state, top: state.top + action.payload};
        case 'change_mid_next':
            return  {...state, mid: state.mid + action.payload};
        case 'change_mid_previous':{}
            return  {...state, mid: state.mid + action.payload};
        case 'change_bottom_next':
            return {...state, bottom: state.bottom + action.payload};
        case 'change_bottom_prev':
            return {...state, bottom: state.bottom + action.payload};
        case 'random': 
            return {...state, top: action.payload.randomTop, mid : action.payload.randomMid, bottom : action.payload.randomBot};
        case 'reset' :
            return {...state, top: 0, mid: 0, bottom: 0};
        default:
            return state;
    }

};

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
        return null;
    }
};

const BuildMonsterScreen = ({route})=>{
    const navigation = useNavigation(); 
    const [isSaved, setIsSaved] = useState(false);

    const [state, dispatch] = useReducer(reducer, {top :0, mid: 0, bottom:0});
    const {top, mid, bottom} = state;

    const [topName, midName, bottomName] = [topMonsterParts[top].namePart, midMonsterParts[mid]
.namePart, bottomMonsterParts[bottom].namePart];

    const [monsterName, setMonsterName] = useState('');
    const [inputName, setInputName] = useState('');

    //object to try to parse after sending
    const [fullMonster, setFullMonster] = useState({
        madeBy: route.params.playerName,
        monsterName: monsterName,
        compoundName: `${topName}-${midName}-${bottomName}`,
        topIndex: top,
        midIndex: mid,
        bottomIndex: bottom
    })

    const changeMonsterName = async () => {
        if (inputName.trim() !== '') {
          setMonsterName(inputName);
          setInputName('');
          setIsSaved(false);
        }
      };
    const updateFullMonster=()=>{
        const newMonster = [{...fullMonster}, {monsterName:monsterName}];
    }
    const fullMonsterToString = () =>{
        return JSON.stringify(fullMonster);
    };

    const saveMonsterKVP = async ()=>{
        try {
            await save("madeBy", route.params.playerName);
            await save("monsterName", monsterName);
            //await save("top", top);
            //await save("mid", mid);
            //await save("bottom", bottom);
            await save("compoundName", `${topName}-${midName}-${bottomName}`);
            updateFullMonster();
            await save("fullMonster", fullMonsterToString());
            setIsSaved(true);
        } catch (error) {
            console.log(error);
        }

    }
    const randomMonster = ()=>{
        const randomTop = Math.floor(Math.random()*LIST_LENGTH);
        const randomMid = Math.floor(Math.random()*LIST_LENGTH);
        const randomBot = Math.floor(Math.random()*LIST_LENGTH);
        dispatch({type: 'random', payload: {randomTop, randomMid, randomBot}});     
    }

    const resetMonsterParts = () =>{
        console.log('reset called');
        dispatch({type: 'reset'});
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Build a Monster Here!</Text>
            
            <TextInput style={styles.inputStyle}  
            placeholder='Name your monster'
            value={inputName}
            onChangeText={setInputName}
            ></TextInput>
            <MainButton buttonContent="Change Name" onPress={changeMonsterName} buttonType="submit"/>

            {isSaved? <View><Text>Your Monster has been saved!</Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                    setIsSaved(false);
                    navigation.navigate("Gallery")}}><Text>Gallery!</Text></TouchableOpacity>
                </View> : <MainButton  
                buttonType="submit" 
            onPress={saveMonsterKVP}
            buttonContent="Save">
            </MainButton>}
            <View style={styles.nameContainer} >
                <Text style={styles.nameStyle}>{monsterName}</Text>
                <Text>the</Text>
                <Text style={styles.nameStyle}>{topName}-{midName}-{bottomName}</Text>

            </View>
            <BodyPart 
                onNext={()=>dispatch({type: 'change_top_next', payload: INCREMENT})} 
                onPrev={()=>dispatch({type: 'change_top_prev', payload: -1 * INCREMENT})} 
                position="top" 
                index={top} />
            <BodyPart 
                onNext={()=>dispatch({type: 'change_mid_next', payload: INCREMENT})} 
                onPrev={()=>dispatch({type: 'change_mid_prev', payload: -1 * INCREMENT})} 
                position="mid" 
                index={mid} />
            <BodyPart 
                onNext={()=>dispatch({type: 'change_bottom_next', payload: INCREMENT})} 
                onPrev={()=>dispatch({type: 'change_bottom_prev', payload: -1 * INCREMENT})} 
                position="bottom" 
                index={bottom} />  

        <View  style={styles.buttonContainer}>
            <MainButton 
                buttonType="navigation"
                onPress={resetMonsterParts}
                buttonContent="Reset">
               
            </MainButton>
            
           <MainButton 
            buttonType="navigation"
            onPress={randomMonster}
            buttonContent = "Random"
            >
            </MainButton>
            
        </View>

        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 0,
        width: 350,
        height: 'auto'
      },
      title: {
        color: 'red',
        fontSize: 30,
        textAlign: 'center',
      },
      inputStyle :{
        paddingHorizontal:5,
     
        borderRadius: 5,
        borderWidth: 3,
    },
    nameStyle : {
        fontSize: 32, 
        fontWeight: 'bold'
    },
    nameContainer : {
        alignItems: 'center',
        borderWidth: 2
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
});

export default BuildMonsterScreen;