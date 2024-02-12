import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () =>{
    //create variable using state INSIDE component

    const [counter, setCounter] = useState(0);

    console.log("counter is " + counter);

    return <View>
        <Text style={styles.title}>Counter Screen</Text>
        <Text>Current Count: {counter}</Text>
        <Button title = "Increase"
            onPress={()=>{
                console.log('oops');
                setCounter(counter +1);
            }}
        />
        <Button title = "Decrease"  
            onPress={()=>{
                console.log("YAY");
                setCounter(counter-1);
            }}
            />
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