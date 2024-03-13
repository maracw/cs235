import React, { useState } from "react";
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import MonsterImage from "./MonsterImage";


const BodyPart = ({position, partList, index, onMonsterChange}) => {
    
    //const [monsterIndex, setMonsterIndex] = useState(index);
    //const [monsterPart, setMonsterPart] = useState(partList[index]);
    //no longer state
    const monsterPart = partList[index];

   
    function onPressLeft () {
        if(index > 0){
            onMonsterChange(position, "previous");
        }
        else {
             console.log('cannot go back index is ' + index);
        }
    };

    const onPressRight =()=>{
      
       if(index < partList.length-1){
            const direction = "next";
            onMonsterChange(position, direction);
        }
        else {
            console.log('No reload - cannot go forward index is ' + index);
        }
    }


       return (
        <View style={ {
            height: 155,
            width: 'auto',
            borderWidth: 3,
            marginBottom: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: monsterPart.tempBgColor,
            borderColor: monsterPart.tempBorderColor

        }}>
            <TouchableOpacity onPress={()=>{onPressLeft()}}>
                <Text>Previous!</Text>
                <Text style={{fontSize: 32, fontWeight: 'bold'}}>{monsterPart.namePart}</Text>
            </TouchableOpacity>
            
            <View style={styles.body}>
               
                <MonsterImage id={monsterPart.id}></MonsterImage>
            </View>
            <TouchableOpacity onPress={()=>{onPressRight()}}>
                <Text>Next!</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles=StyleSheet.create({
    containerStyle : {
        height: 150,
        width: 'auto',
        borderWidth: 3,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    body : {
        flexDirection: 'column',
        flex: 1,

    },
    buttonStyle :{
        flex: .2,
    }
});

export default BodyPart;