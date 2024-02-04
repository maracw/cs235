import React from "react";
import {View, Text, StyleSheet} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" 
            imageSource ={require('../../assets/forest.jpg')}
            rating = {5}/>
        <ImageDetail title ="Beach" 
            imageSource ={require('../../assets/beach.jpg')}
            rating = {2.5}/>
        <ImageDetail title="Mountain" 
            imageSource ={require('../../assets/mountain.jpg')}
            rating = {3}></ImageDetail>
    </View>
};

export default ImageScreen;