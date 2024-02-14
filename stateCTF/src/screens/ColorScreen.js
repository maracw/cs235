import react, {useState} from 'react';
import {View, StyleSheet, Button, Text, FlatList} from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const ColorScreen = ()=>{

    const [colors, setColors] = useState([]);

    const onIncrease =({color})=>{
        console.log('MOre' + color);
    };

    const onDecrease=({color})=>{
        console.log('less' + color);
    };

    return <View style={styles.container}>
        <ColorAdjuster color="Red" onDecrease={onDecrease} onIncrease={onIncrease}></ColorAdjuster>
        <ColorAdjuster color="Green"  onDecrease={onDecrease} onIncrease={onIncrease}></ColorAdjuster>
        <ColorAdjuster color="Blue" onDecrease={onDecrease} onIncrease={onIncrease}></ColorAdjuster>
        <Button 
            onPress={()=>{
                setColors([...colors, randomRGB()]);
                console.log(colors.length);
            }}
            title="Add a color"></Button>
    
        <FlatList 
            keyExtractor={item => item}
            data={colors}
            renderItem={({item})=>{
                return (
                     <View style={{height:100, width: 100, backgroundColor: item}}>
                        <Text style={{color: {item}}}>{item}</Text>
                     </View>)
                     }}
             />
    </View>
};

const randomRGB =()=>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red},${green}, ${blue})`;
};

const styles = StyleSheet.create({
});

export default ColorScreen;