import react, {useReducer} from 'react';
import {View, StyleSheet, Button, Text, FlatList} from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';


const COLOR_INCREMENT = 15;

//reducer function - by convention it is defined outside of component
//state === {red : number, green: number, blue: number}
//action includes colorToChange: 'red' || 'green'||'blue', amount: 15 ||-15

const reducer = (state, action) => {
    switch(action.colorToChange) {
        case 'Red':
            //return the thing DO NOT modify the state directly
            //rebuild the object from scratch with the new value
            return state.red + action.amount > 255 || state.red + action.amount<0 ? state :  {...state, red: state.red + action.amount};
          
        case 'Green':
            return state.green + action.amount > 255 || state.green + action.amount<0 ? state :  {...state, green: state.green + action.amount};
        case 'Blue':
            return state.blue + action.amount > 255 || state.blue + action.amount<0 ? state :  {...state, blue: state.blue + action.amount};

        default:
            return state;
    }

};

const ReducerScreen = ()=>{

    const [state, dispatch] = useReducer(reducer, {red :0, green: 0, blue:0});
    const {red, green, blue} = state;
    
    return <View>
        <Text style={styles.textTitle}>Square Screen with Reducer</Text>
        <Text> Red is {red}</Text>
        <Text>Green is {green}</Text>
        <Text>Blue is {blue}</Text>

        <ColorAdjuster color="Red" 
            onIncrease={()=>dispatch({colorToChange:'Red', amount : COLOR_INCREMENT})} 
            onDecrease={()=>dispatch({colorToChange: 'Red', amount : -1 * COLOR_INCREMENT})} />
        <ColorAdjuster color="Green" 
            onIncrease={()=>dispatch({colorToChange: 'Green', amount : COLOR_INCREMENT})} 
            onDecrease={()=>dispatch({colorToChange: 'Green', amount : -1*COLOR_INCREMENT})} />
        <ColorAdjuster color="Blue" 
            onIncrease={()=>dispatch({colorToChange: "Blue", amount: COLOR_INCREMENT})} 
            onDecrease={()=>dispatch({colorToChange: 'Blue', amount: -1*COLOR_INCREMENT})} />
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

export default ReducerScreen;