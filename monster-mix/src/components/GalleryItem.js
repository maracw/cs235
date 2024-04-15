import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

const GalleryItem = ({monsterItem}) =>{

    const madeBy = ()=>{
        return !monsterItem.madeBy? "no made by" : monsterItem.madeBy;
    }
    const monsterName = ()=>{
        return !monsterItem.monsterName? "no name" : monsterItem.monsterName;
    }
    return (
        <View>
            <Text>{monsterName} is made by {madeBy}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default GalleryItem;