import React from "react";
import {View, Text, StyleSheet} from "react-native";
import ImageDetail from "../components/ImageDetail";

const basePath = '../../assets/';


const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" 
            imageSource = {require(basePath + 'forest.jpg')}
            rating = {5}/>
        <ImageDetail title ="Beach" 
            imageSource ={require(basePath +'beach.jpg')}
            rating = {2.5}/>
        <ImageDetail title="Mountain" 
            imageSource ={require(basePath + '/mountain.jpg')}
            rating = {3}></ImageDetail>
    </View>
};

export default ImageScreen;