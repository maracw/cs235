import React, {useState} from "react";
import {Text, View, StyleSheet} from 'react-native';
import BodyPart from "../components/BodyPart";
import {topMonsterParts, midMonsterParts, bottomMonsterParts} from '../data/monsterPartList';
import monsterList from '../data/monsterList';

const BuildMonsterScreen = ()=>{
    const topList = topMonsterParts;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Build a Monster Here!</Text>
            <BodyPart partList={topMonsterParts} position="top" index={0}/>
            <BodyPart partList={midMonsterParts} position="middle" index={1} />
            <BodyPart partList={bottomMonsterParts} position="bottom"  index={2}/> 

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        
      },
      title: {
        color: 'red',
        fontSize: 30,
        textAlign: 'center',
      }
});

export default BuildMonsterScreen;