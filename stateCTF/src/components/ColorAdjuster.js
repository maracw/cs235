import React from 'react';
import {View, Text, Button, StyleSheet} from "react-native";

const ColorAdjuster =({color, onIncrease, onDecrease}) =>{


    return (<View style={styles.buttonContainer}>
        <Button title={`INCREASE ${color}`}
            onPress={onIncrease}/>
        <Button title={`DECREASE ${color}`}
            onPress={onDecrease}/>
        </View>)
};


const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 50,
        backgroundColor: '#fff',
        }
})
export default ColorAdjuster;