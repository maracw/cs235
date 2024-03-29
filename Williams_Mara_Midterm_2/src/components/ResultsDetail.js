import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({result})=>{
    return <View style={styles.containerStyle}>
        <Image style={styles.imageStyle} source={{uri :result.image_url}}></Image>
        <Text style={styles.nameStyle}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
};

const styles = StyleSheet.create({
    imageStyle :{
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle :{
        fontWeight: 'bold',
        fontSize: 16,
    },
    containerStyle :{
        marginLeft: 10,
    }
});

export default ResultsDetail;

