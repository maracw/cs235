import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";

const ImageDetail = ({title, imageSource, rating}) => {
    //const imagePath = '../../assets/' + {imageSource};
    return <View style={styles.view}>
        <Text style={styles.title}>{title}</Text>
        <Image source={imageSource}></Image>
        <Text>Rating : {rating}</Text>
    </View>;
};

const styles = StyleSheet.create({
    view : {
        marginHorizontal: 10
    },
    title : {
        fontSize : 25,
        marginVertical: 10,
    }
});

export default ImageDetail;