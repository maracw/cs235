import React, {useState, useReducer} from "react";
import {Text, View, ScrollView, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";
import BodyPart from "../components/BodyPart";
import {topMonsterParts, midMonsterParts, bottomMonsterParts} from '../data/monsterPartList';
//import monsterList from '../data/monsterList';

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

async function getPlayerName() {
    let result = await SecureStore.getItemAsync("name");
    if (result) {
    return (result); 
    } else {
        console.log("no player name found");
        return null;
    }
};

const BuildMonsterScreen = ({route})=>{
    console.log(route.params.playerName);
    const [state, dispatch] = useReducer(reducer, {top :0, mid: 0, bottom:0});
    const {top, mid, bottom} = state;

    const [topName, midName, bottomName] = [topMonsterParts[top].namePart, midMonsterParts[mid]
.namePart, bottomMonsterParts[bottom].namePart];
    const [monsterName, setMonsterName] = useState('');
    const [inputName, setInputName] = useState('');

    // const [playerName, setPlayerName] = useState(route.playerName);

    const buildMonsterResult = ()=>{
        let monster = {
            madeBy: route.params.playerName,
            monsterName: monsterName,
            bodyParts: {state},
            compoundSpeciesName : `${topName}-${midName}-${bottomName}`,
        }
        return monster;
    }
    const changeMonsterName = async () => {
        if (inputName.trim() !== '') {
          setMonsterName(inputName);
          setInputName('');
        }
      };
    
    
    const saveMonster = async ()=>{
        const monsterToSend = buildMonsterResult();
        console.log(monsterToSend);
        if(monsterToSend) {
            await save("userMonster", monsterToSend); 
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
            <Button title="Change Name" onPress={changeMonsterName} />

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
            <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={()=>{resetMonsterParts()}}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={()=>{randomMonster()}}>
                <Text style={styles.buttonText}>random</Text>
            </TouchableOpacity>
            
            <TouchableOpacity  style={styles.buttonStyle} 
            onPress={()=>{buildMonsterResult()}}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
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