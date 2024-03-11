import React, {useState} from "react";
import {Text, View, StyleSheet} from 'react-native';
import BodyPart from "../components/BodyPart";
import monsterList from "../data/monsterList";
import {topMonsterParts, midMonsterParts, bottomMonsterParts} from '../data/monsterPartList';

const BuildMonsterScreen = ()=>{

    //use state to manage when a monster changes
    
    const monsters = monsterList;
  

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Build a Monster Here!</Text>
            <BodyPart monsterIndex={0} partList={topMonsterParts} position="top" />
            <BodyPart monsterIndex={0} monster={midMonsterParts} position="middle" />
            <BodyPart monsterIndex={0} monster={bottomMonsterParts} position="bottom" />

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