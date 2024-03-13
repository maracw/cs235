import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
import imageIndex from '../data/imageIndex';

const MonsterImage = ({id}) =>{

    const imageOk = require('../images/Dracula-1.png');
    const dynamicImage = imageIndex[id];

    return <Image style={styles.imageStyle} source={dynamicImage}></Image>
};

const styles=StyleSheet.create({
    imageStyle: {
        borderRadius : 10,
        resizeMode: 'cover',
        width:'100%',
        height:150
    },
})
export default MonsterImage;