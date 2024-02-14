import react, {useState} from 'react';
import {View, StyleSheet, Button, Text, FlatList} from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const SquareScreen = ()=>{

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);


    const onIncrease =({color})=>{
        if (color == 'Red' && red<255)
        {
            setRed(red + 5);
        }
        else if (color =='Green' && green<255)
        {
            setGreen(green + 5);
        }
        else if (color =='Blue' && blue<255)
        {
            setBlue(blue + 35);
        }
    };
    const onDecrease =({color})=>{
        if (color == 'Red' && red>0)
        {
            setRed(red - 25);
        }
        else if (color =='Green' && green>0)
        {
            setGreen(green - 15);
        }
        else if (color =='Blue' && blue>0)
        {
            setBlue(blue - 15);
        }
    };

    return <View>
        <Text style={styles.textTitle}>Square Screen</Text>
        <Text> Red is {red}</Text>
        <Text>Green is {green}</Text>
        <Text>Blue is {blue}</Text>

        <ColorAdjuster color="Red" onIncrease={onIncrease} onDecrease={onDecrease}></ColorAdjuster>
        <ColorAdjuster color="Green" onIncrease={onIncrease} onDecrease={onDecrease}></ColorAdjuster>
        <ColorAdjuster color="Blue" onIncrease={onIncrease} onDecrease={onDecrease}></ColorAdjuster>
        <View style={{height: 200, width: 250, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>
};

const styles = StyleSheet.create({
    textTitle : {
        fontSize: 25,
    }
});

export default SquareScreen;