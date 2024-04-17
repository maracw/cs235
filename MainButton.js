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
                style={styles.navigationStyle}
                onPress={()=>{onPress()}}>
                <Text style={styles.navigationText}>{buttonContent}</Text>
            </TouchableOpacity>
        );
    }
    
};

const styles=StyleSheet.create({
submitText : {

},
navigationText : {
    color: '#000',
    fontSize: 18,
    textAlign: 'center'
    },
navigationStyle : {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#da6969",
    padding: 10,    
    margin: 15,      
    },

 });

export default MainButton;
