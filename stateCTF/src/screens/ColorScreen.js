import react from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

const ColorScreen = ()=>{
    return <View style={styles.container}>
        <Text>Color Screen</Text>
        <Button title="Add a color"></Button>
        <View style={{height:100, width: 100, backgroundColor: randomRGB()}}></View>
    </View>
};

const randomRGB =()=>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red},${green}, ${blue})`;
};

const styles = StyleSheet.create({
    container :{
        margin: 50
    }
});

export default ColorScreen;