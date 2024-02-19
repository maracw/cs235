import React from "react";
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = ()=>{

    return <View style={styles.viewStyle}>
        <View style={styles.view1}></View>
        <View style={styles.view2}></View>
        <View style={styles.view3}></View>
        
    </View>
};

const styles = StyleSheet.create({
    text1 :{
        borderWidth: 2,
        borderColor: 'red',
        padding: 4,
        flex: 1
        
    },
    text2 :{
        borderWidth: 2,
        borderColor: 'red',
        padding: 4,
        flex: 1,
        fontSize: 20,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'pink'

    },
    text3 :{
        borderWidth: 2,
        borderColor: 'red',
        padding: 4,
        flex: 1
    },
    view1 : {
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    view2 : {
        height: 100,
        width: 100,
        backgroundColor: 'rgb(255, 155,0)',
        alignSelf: 'flex-end'
    },
    view3 : {
        height: 100,
        width: 100,
        backgroundColor: 'green'
    },
    viewStyle :{
        borderWidth: 2,
        borderColor:'blue',
        marginVertical: 30,
        height: 260,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default BoxScreen;