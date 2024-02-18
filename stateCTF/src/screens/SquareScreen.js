import react, {useState} from 'react';
import {View, StyleSheet, Button, Text, FlatList} from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';


const COLOR_INCREMENT = 15;

const SquareScreen = ()=>{

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change)=>{
        switch (color) {
            case 'Red':
                red + change>255 || red + change <0 ? null : setRed(red + change);
                return;
            case 'Green':
                green + change>255 || green + change <0 ? null : setGreen(green + change);
                return;
            case 'Blue':
                blue + change>255 || blue + change <0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
        //color is string 
        //change is + 15 or -15
        //this validates before setting state
        
    };
    const onIncrease =({color})=>{
        if (color == 'Red' && red + COLOR_INCREMENT<=255)
        {
            setRed(red + COLOR_INCREMENT);
            // console.log(red);
        }
        else if (color =='Green' && green + COLOR_INCREMENT<=255)
        {
            setGreen(green + COLOR_INCREMENT);
        }
        else if (color =='Blue' && blue<255)
        {
            setBlue(blue + COLOR_INCREMENT);
        }
    };
    const onDecrease =({color})=>{
        if (color == 'Red' && red>0)
        {
            setRed(red - COLOR_INCREMENT);
            // console.log(red);
        }
        else if (color =='Green' && green>0)
        {
            setGreen(green - COLOR_INCREMENT);
        }
        else if (color =='Blue' && blue>0)
        {
            setBlue(blue - COLOR_INCREMENT);
        }
    };

    return <View>
        <Text style={styles.textTitle}>Square Screen</Text>
        <Text> Red is {red}</Text>
        <Text>Green is {green}</Text>
        <Text>Blue is {blue}</Text>

        <ColorAdjuster color="Red" onIncrease={()=>setColor('Red', COLOR_INCREMENT)} onDecrease={()=>setColor('Red', COLOR_INCREMENT*-1)}></ColorAdjuster>
        <ColorAdjuster color="Green" onIncrease={()=>setColor('Green', COLOR_INCREMENT)} onDecrease={()=>setColor('Green',COLOR_INCREMENT*-1 )}></ColorAdjuster>
        <ColorAdjuster color="Blue" onIncrease={()=>setColor('Blue', COLOR_INCREMENT)} onDecrease={()=>setColor('Blue', COLOR_INCREMENT*-1)}></ColorAdjuster>
        <View style={{height: 200, width: 250, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>
};

const styles = StyleSheet.create({
    textTitle : {
        fontSize: 25,
        borderStyle: 'solid',
        borderColor : '#000',
        
    },

});

export default SquareScreen;