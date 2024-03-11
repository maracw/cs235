import React, { useState } from "react";
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';


const BodyPart = ({position, monsterIndex, partList}) => {
    const [part, setPart] = useState(partList[monsterIndex]);
    const [monsterIndex, setMonsterIndex] = useState(monsterIndex);

   
    function onPressLeft () {
        console.log('left pressed' + part.id);
        if(id >1){
            console.log('can go back');
            setMonsterIndex(part.id-1);
            console.log('Monster index is ' + monsterIndex);
        }
        else {
            console.log('cannot go back');
        }
    };

    const onPressRight =()=>{
        console.log('right pressed for ' + part.fullName + ' monster # ' + part.id);
        if(monsterIndex < partList.length){
            console.log('can go forward');
            setMonsterIndex(monsterIndex+1);
            console.log('Monster index is ' + monsterIndex);
        }
        else {
            console.log('cannot go forward');
        }
    }
   
    return (
        <View style={ {
            height: 100,
            width: 'auto',
            borderWidth: 3,
            marginBottom: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: monster.tempBgColor,
            borderColor: monster.tempBorderColor

        }}>
            <TouchableOpacity onPress={()=>{onPressLeft(monster.id)}}>
                <Text>Left!</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>{partName} {position}</Text>
            <TouchableOpacity onPress={()=>{onPressRight()}}>
                <Text>Right</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles=StyleSheet.create({
    containerStyle : {
        height: 100,
        width: 'auto',
        borderWidth: 3,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default BodyPart;