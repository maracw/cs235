import React from "react";
import {Text, Image, View, StyleSheet} from 'react-native';

const HikeDetail = ({imageSource, title, miles, level})=>{
    return <View style={styles.container}>
        <Image style={styles.image} source={imageSource}></Image>
        <Text style={styles.title}>{title}</Text>
        <Text>Length: {miles} miles</Text>
        <Text>Level: {level}</Text>
        </View>;
};


const baseFontSize = 16;

const styles = StyleSheet.create({
    image: {
        borderRadius : 10
    },
    container: {
        padding : 10,
        alugnItems: 'center'
    },
    title :{
        fontSize : 20,
        fontWeight : 'bold'
    }

});
export default HikeDetail;