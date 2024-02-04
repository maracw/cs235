import React from "react";
import {Text, StyleSheet} from 'react-native';

const AboutScreen = () => {
    return <Text style={styles.text}>This app was updated by Mara!</Text>
};

const styles = StyleSheet.create({
    text : {
        textAlign : 'center'
    }
});

export default AboutScreen;