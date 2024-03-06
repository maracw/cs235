import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const StarDisplay = ({rating, scale}) => {
 
        //make an empty array
        //add 'star' to the array if the rating is >1
        //else add 'star-half-empty' if the rating is between 0-1
        //else add a 'star-o' to the array
        //decrement rating before running the loop again
        //return the finished array
        //then use .map inside a View to return a FontAwesome element with the correct name

        let arr = [];
        
        for (let i = 0; i<scale; i++) {
            if (rating>=1){
                arr.push('star');
            }
            else if (rating>0 && rating<1){
                arr.push('star-half-empty');
            }
            else{
                arr.push('star-o');
            }
            rating--;
        }
        
    return (
        <View style={styles.starsStyle}>
        {arr.map((iconName)=>{
            return <FontAwesome name={iconName} size={16} color="gold" ></FontAwesome>
        })}
    </View>);
};

const styles = StyleSheet.create({
    starsStyle :{
        flexDirection: 'row',
    },
});

export default StarDisplay;