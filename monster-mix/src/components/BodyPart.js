import React, { useState } from "react";
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';


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
   
    return (
        <View style={ {
            height: 100,
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
            </TouchableOpacity>
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>{monsterPart.namePart} {monsterIndex}</Text>
            <TouchableOpacity onPress={()=>{onPressRight()}}>
                <Text>Next!</Text>
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