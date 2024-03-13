import React, { useState } from "react";
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import MonsterImage from "./MonsterImage";


const BodyPart = ({position, partList, index, onMonsterChange}) => {
    
    const [monsterIndex, setMonsterIndex] = useState(index);
    const [monsterPart, setMonsterPart] = useState(partList[monsterIndex]);

   
    function onPressLeft () {
        if(monsterIndex > 0){
            setMonsterIndex(monsterIndex - 1);
            newPart = partList[monsterIndex-1];
            setMonsterPart(newPart);
            onMonsterChange(position, "previous");
        }
        else {
             console.log('cannot go back index is ' + monsterIndex);
        }
    };

    const onPressRight =()=>{
      
       if(monsterIndex < partList.length-1){
            console.log('can go forward');
            setMonsterIndex(monsterIndex + 1);
            newPart = partList[monsterIndex + 1];
            setMonsterPart(newPart);
            //console.log('Monster is now' + newPart.fullName);
            console.log("sending back to build screen to change");
            onMonsterChange(position, "next");
        }
        else {
            console.log('No reload - cannot go forward index is ' + monsterIndex);
        }
    }

    const basePath = '../images/';

    //const monsterImage = `${basePath} + ${monsterPart.imagePath}.png`;
    //const monsterImage = require(`../images/${monsterPart.imagePath}.png`);
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