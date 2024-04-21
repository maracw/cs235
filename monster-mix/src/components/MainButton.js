import react from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

const MainButton = ({onPress, buttonType, buttonContent}) =>{
    
    const styleName = `styles.${buttonType}Style`;
    const textStyle=`styles.${buttonType}Text`;
    
   if(buttonType=='navigation'){
        return (
            <TouchableOpacity 
                style={styles.navigationStyle}
                onPress={()=>{onPress()}}>
                <Text style={styles.navigationText}>{buttonContent}</Text>
            </TouchableOpacity>
    );}
    else {
        return (
            <TouchableOpacity 
                style={styles.submitStyle}
                onPress={()=>{onPress()}}>
                <Text style={styles.submitText}>{buttonContent}</Text>
            </TouchableOpacity>
        );
    }
    
};

const styles=StyleSheet.create({
submitText : {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 4,
},
submitStyle :{
    paddingHorizontal:5,
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: 'gray',
    marginBottom: 5,
},
navigationText : {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
    },
navigationStyle : {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#8B0000",
    padding: 10,    
    margin: 15,      
    },

 });

export default MainButton;