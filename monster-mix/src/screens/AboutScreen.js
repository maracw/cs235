import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const AboutScreen = ()=>{
    return (
        <View style={styles.tileContainer}>
            <Text style={styles.title}>This is the about screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        textAlign: 'center',
        marginVertical: 10
    },
    tileContainer : {
        justifyContent: 'center'
    }
});

export default AboutScreen;