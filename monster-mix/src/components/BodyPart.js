import React from "react";
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';


const BodyPart = ({onPressLeft,onPressRight, position, monster}) => {
    let partName;

        if (position=="top"){
            console.log(monster.fullName);
            partName = monster.topName;
        }
        else if (position=="middle"){
            partName=monster.midName;
        }
        else {
            partName=monster.bottomName;
        }
        console.log(partName +' '+ monster.fullName);

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
            <TouchableOpacity onPress={()=>{onPressRight(monster.fullName)}}>
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