import React, {useState, useReducer} from "react";
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';
import BodyPart from "../components/BodyPart";
import {topMonsterParts, midMonsterParts, bottomMonsterParts} from '../data/monsterPartList';
import monsterList from '../data/monsterList';

const LIST_LENGTH = 4;
const INCREMENT = 1;

const reducer = (state, action) => {
    console.log(state.mid + action.payload);

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
const BuildMonsterScreen = ()=>{
    
    const [state, dispatch] = useReducer(reducer, {top :0, mid: 0, bottom:0});
    const {top, mid, bottom} = state;

    const [topName, midName, bottomName] = [topMonsterParts[top].namePart, midMonsterParts[mid]
.namePart, bottomMonsterParts[bottom].namePart];
    const [testCount, setTestCount] = useState(0);
    const [monsterName, setMonsterName] = useState("Marty");

    console.log("LINE 16 reloaded top is " +top + " mid is " + mid + " bottom is " + bottom);
    //console.log("test count is " + testCount);

    const randomMonster = ()=>{
        const randomTop = Math.floor(Math.random()*LIST_LENGTH);
        const randomMid = Math.floor(Math.random()*LIST_LENGTH);
        const randomBot = Math.floor(Math.random()*LIST_LENGTH);
        dispatch({type: 'random', payload: {randomTop, randomMid, randomBot}});     
    }

   async function changeMonsterIndex (position, direction) {
        console.log("change called in parent for " + position + ' '+ direction);
        if (position=="top"){
            console.log('inside first block');
            if (direction=="next"){
                setTopIndex(topIndex+1);
                setTopPart(topIndex+1);
            }
            else{
                setTopIndex(topIndex-1);
                setTopPart(topIndex-1)
            }
            }
        else if(position=="middle"){
            direction=="next"? setMidIndex(midIndex+1) : setMidIndex(midIndex-1);
        }
        else {
            direction=="next"? setBottomIndex(bottomIndex+1) : setBottomIndex(bottomIndex-1);
        }
        //console.log("LINE 41 changed top to " + topIndex);
    };

    const resetMonsterParts = () =>{
        console.log('reset called');
        dispatch({type: 'reset'});
        
        // else {
        //     console.log('no reset needed for topIndex' + topIndex);
        // }
        //topIndex!==0? setTopIndex(0) : null;
        //midIndex!=0? setMidIndex(0): null;
        //bottomIndex!=0? setBottomIndex(0): null;
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Build a Monster Here!</Text>
            <TextInput style={styles.inputStyle}  
            placeholder='Name your monster'
            value={monsterName}
            //onTermChange={(monsterName)=>{setTerm(monsterName)}}
            //onTermSubmit={(monsterName)=>{setTerm(monsterName)}}
            ></TextInput>
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

            <Button title="reset" onPress={()=>{resetMonsterParts()}}></Button>
    
            <Button title="RANDOM" onPress={()=>{randomMonster()}}></Button>

        </View>

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
    }
});

export default BuildMonsterScreen;