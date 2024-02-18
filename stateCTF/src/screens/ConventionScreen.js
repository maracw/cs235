import react, {useReducer} from 'react';
import {View, StyleSheet, Button, Text, FlatList} from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';


const COLOR_INCREMENT = 15;

//reducer function - by convention it is defined outside of component
//state === {red : number, green: number, blue: number}
//action includes type: 'change_red' || 'change_green'||'change_blue', payload: 15 ||-15

const reducer = (state, action) => {
    switch(action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload<0 ? state :  {...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload<0 ? state :  {...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload<0 ? state :  {...state, blue: state.blue + action.payload};
        default:
            return state;
    }

};

const ConventionScreen = ()=>{

    const [state, dispatch] = useReducer(reducer, {red :0, green: 0, blue:0});
    const {red, green, blue} = state;
    
    return <View>
        <Text style={styles.textTitle}>Convention Screen with Reducer</Text>
        <Text> Red is {red}</Text>
        <Text>Green is {green}</Text>
        <Text>Blue is {blue}</Text>

        <ColorAdjuster color="Red" 
            onIncrease={()=>dispatch({type:'change_red', payload : COLOR_INCREMENT})} 
            onDecrease={()=>dispatch({type: 'change_red', payload : -1 * COLOR_INCREMENT})} />
        <ColorAdjuster color="Green" 
            onIncrease={()=>dispatch({type: 'change_green', payload : COLOR_INCREMENT})} 
            onDecrease={()=>dispatch({type: 'change_green', payload : -1 * COLOR_INCREMENT})} />
        <ColorAdjuster color="Blue" 
            onIncrease={()=>dispatch({type: 'change_blue', payload: COLOR_INCREMENT})} 
            onDecrease={()=>dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})} />
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

export default ConventionScreen;