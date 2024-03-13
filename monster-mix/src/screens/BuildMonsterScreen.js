import React, {useState} from "react";
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';
import BodyPart from "../components/BodyPart";
import {topMonsterParts, midMonsterParts, bottomMonsterParts} from '../data/monsterPartList';
import monsterList from '../data/monsterList';

const BuildMonsterScreen = ()=>{
    
    const [topIndex, setTopIndex] = useState(0);
    const [midIndex, setMidIndex] = useState(0);
    const [bottomIndex, setBottomIndex] = useState(0);

    const [testCount, setTestCount] = useState(0);
    const [monsterName, setMonsterName] = useState("Marty");

    console.log("LINE 16 reloaded top is " +topIndex + " mid is " + midIndex + " bottom is " + bottomIndex);
    //console.log("test count is " + testCount);

    const randomMonster = ()=>{
        const top = Math.floor(Math.random()*3);
        const middle = Math.floor(Math.random()*3);
        const bottom = Math.floor(Math.random()*3);
        console.log(top + ' ' + middle + ' ' + bottom);
        setBottomIndex(bottom);
        setMidIndex(middle);
        setTopIndex(top);
    }

   async function changeMonsterIndex (position, direction) {
        console.log("change called in parent for " + position + ' '+ direction);
        if (position=="top"){
            console.log('inside first block');
            direction=="next"? await setTopIndex(topIndex+1) : await setTopIndex(topIndex-1);
            console.log("LINE 34 changed top to " + topIndex);
            //topIndex<topMonsterParts.length? setTopIndex(topIndex + 1) : console.log("cannot go next for " + {position});
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
        setTestCount(testCount+1);
        if (topIndex!=0){
           setTopIndex(0);
        }
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
            <Text>Name: {monsterName}</Text>
            <BodyPart 
            partList={topMonsterParts} 
                position="top" 
                index={topIndex} 
                onMonsterChange={changeMonsterIndex}/>
            <BodyPart 
                partList={midMonsterParts} 
                position="middle" 
                index={midIndex} 
                onMonsterChange={changeMonsterIndex}/>
            <BodyPart 
                partList={bottomMonsterParts} 
                position="bottom"  
                index={bottomIndex} 
                onMonsterChange={changeMonsterIndex}/> 

            <Button title="reset" onPress={()=>{resetMonsterParts()}}></Button>
            <Text>Test count is {testCount}</Text>
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
});

export default BuildMonsterScreen;