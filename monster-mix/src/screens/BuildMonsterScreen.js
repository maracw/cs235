import React, {useState} from "react";
import {Text, View, StyleSheet} from 'react-native';
import BodyPart from "../components/BodyPart";
import monsterList from "../data/monsterList";

const BuildMonsterScreen = ()=>{

    //use state to manage when a monster changes
    
    const monsters = monsterList;
    const [topMonster, SetTopMonster] = useState(monsterList[0]);
    const [midMonster, setMidMonster] = useState(monsterList[1]);
    function onPressLeft (id) {
        console.log('left pressed' + id);
        if(id >1){
            console.log('can go back');
            const newMonster=monsterList[id-1];
            setMidMonster(newMonster);
        }
        else {
            console.log('nope');
        }
    };

    const onPressRight =({monsterName})=>{
        console.log('right pressed for ' + monsterName);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Build a Monster Here!</Text>
            <BodyPart monster={topMonster} position="top" onPressLeft={onPressLeft} onPressRight={onPressRight}/>
            <BodyPart monster={midMonster} position="middle" onPressLeft={onPressLeft} onPressRight={onPressRight}/>
            <BodyPart monster={monsters[2]} position="bottom" onPressLeft={onPressLeft} onPressRight={onPressRight}/>

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