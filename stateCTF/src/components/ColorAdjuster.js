import React from 'react';
import {View, Text, Button, StyleSheet} from "react-native";

const ColorAdjuster =({color, onIncrease, onDecrease}) =>{


    return (<View style={styles.buttonContainer}>
        <Text>{color}</Text>
        <Button title={`INCREASE ${color}`}
            onPress={()=>{
                {onIncrease ({color})}
                }}/>
        <Button title={`DECREASE ${color}`}
            onPress={()=>{
                {onDecrease({color})}
                }}></Button>
        </View>)
};


const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 50
    }
})
export default ColorAdjuster;