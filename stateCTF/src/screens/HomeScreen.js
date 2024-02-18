import React, {useReducer} from "react";
import {View, Text, StyleSheet} from 'react-native';
import ColorAdjuster from "../components/ColorAdjuster";

const COLOR_CHANGE = 30;


const reducer = (state, action) =>{
  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount <0 ? state : {...state, red: state.red + action.amount };
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount <0 ? state : {...state, green: state.green + action.amount };
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount <0 ? state : {...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const HomeScreen = ()=>{
  const [state, dispatch] = useReducer(reducer,{red:0, green:0, blue: 0});
  
  // const dynamicStyle =()=> {
  //   const newStyle ={...styles.container, backgroundColor: `rgb(${state.red}, ${state.blue}, ${state.green})`};
  //   console.log(newStyle);
  //   return newStyle;
  // };
//<View style={{...styles.container, backgroundColor: `rgb(${state.red}, ${state.green}), ${state.blue}`}}

    return <View style={styles.container}>
        <Text>Home Screen !!</Text>
        <ColorAdjuster color="Red" 
            onIncrease={()=>dispatch({colorToChange:'red', amount : COLOR_CHANGE})} 
            onDecrease={()=>dispatch({colorToChange: 'red', amount : -1 * COLOR_CHANGE})} />
        <ColorAdjuster color="Green" 
            onIncrease={()=>dispatch({colorToChange: 'green', amount : COLOR_CHANGE})} 
            onDecrease={()=>dispatch({colorToChange: 'green', amount : -1*COLOR_CHANGE})} />
        <ColorAdjuster color="Blue" 
            onIncrease={()=>dispatch({colorToChange: "blue", amount: COLOR_CHANGE})} 
            onDecrease={()=>dispatch({colorToChange: 'blue', amount: -1*COLOR_CHANGE})} />
      
      <View style={{height: 200, width: 250, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}></View>


 
    </View>
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    square: {

    }
  });

  export default HomeScreen;