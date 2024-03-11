import React, { useState } from "react";
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';


const BodyPart = ({position, partList, index}) => {
    
    const [monsterIndex, setMonsterIndex] = useState(index);
    const [monsterPart, setMonsterPart] = useState(partList[monsterIndex]);

    //console.log('Part list is null ' + !partList);
    // const initialMonsterPart = ()=>{
    //     if(!monsterPart){
    //         setMonsterPart(partList[monsterIndex]);
    //         console.log(monsterPart.fullName); 
    //     }

    // };
   
    function onPressLeft () {
        if(monsterIndex > 0){
            setMonsterIndex(monsterIndex - 1);
            newPart = partList[monsterIndex-1];
            setMonsterPart(newPart);
        }
        else {
             console.log('cannot go back index is ' + monsterIndex);
        }
    };

    const onPressRight =()=>{
        console.log('right pressed for ' + monsterPart.fullName + ' monster # ' + monsterIndex);
       if(monsterIndex < partList.length-1){
            console.log('can go forward');
            setMonsterIndex(monsterIndex + 1);
            newPart = partList[monsterIndex + 1];
            setMonsterPart(newPart);
            console.log('Monster is now' + newPart.fullName);
        }
        else {
            console.log('cannot go forward index is ' + monsterIndex);
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