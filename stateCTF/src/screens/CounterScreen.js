import React , {useState} from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

//create variable using state

const [counter, setCounter] = useState(0);

const colors =['red', 'blue'];
const [red, blue]= colors;

const CounterScreen = () =>{
    return <View>
        <Text style={styles.title}>Counter Screen</Text>
        <Text>Current Count: {counter}</Text>
        <Button title = 'Increase' onpress={()=>{
            setCounter(counter++);
            console.log('increased');
        }}/>
        <Button title = 'Decrease'  onpress={()=>{
            setCounter(counter--);
            console.log('decreased');
        }}/>
    </View>
};

const styles = StyleSheet.create({
        title :{
            fontSize : 25,
            paddingVertical: '15%',
            textAlign :'center',
            
        },
        container: {
            margin:20,
        }
    }
)
export default CounterScreen;