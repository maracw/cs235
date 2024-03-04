import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ReviewItem = ({review}) =>{

    const starsArray = (rating) =>{
        //make an empty array
        //add 'star' to the array if the rating is >1
        //else add 'star-half-empty' if the rating is between 0-1
        //else add a 'star-o' to the array
        //decrement rating before running the loop again
        //return the finished array
        //then use .map inside a View to return a FontAwesome element with the correct name

        let arr = [];
        
        for (let i = 0; i<5; i++) {
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
        return arr;
    };

    return (
        <View style={styles.containerStyle}>
            <View style={styles.userStyle}>
                <Image source={{uri : review.user.image_url}} style={styles.imageStyle}></Image>
                <Text>{review.user.name}</Text>
                <View style={styles.starsStyle}>
                    {starsArray(review.rating).map((iconName)=>{
                        return <FontAwesome name={iconName} size={16} color="gold" ></FontAwesome>
                    })}
                </View>
            </View>
            
            <Text style={styles.textStyle}>{review.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle :{
        marginHorizontal: 15,
        marginBottom: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
       
    },
    userStyle :{
        flex:.25,
        justifyContent: 'flex-end'
    },
    starsStyle :{
        flexDirection: 'row',
    },
    imageStyle :{
        width: 50,
        height: 50,
        borderRadius: 6,
    },
    textStyle : {
        flex: .75,
        marginHorizontal: 10,
        width: 280,
        backgroundColor: '#dadada',
        padding: 12,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: 'black',
        shadowOpacity: .33,
        shadowRadius: 3,
        shadowOffset: {width: 3, height: 5},
    }
});

export default ReviewItem;