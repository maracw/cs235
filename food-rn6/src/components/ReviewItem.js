import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import StarDisplay from "./StarDisplay";

const YELP_SCALE = 5;

const ReviewItem = ({review}) =>{

    return (
        <View style={styles.containerStyle}>
            <View style={styles.userStyle}>
                <Image source={{uri : review.user.image_url}} style={styles.imageStyle}></Image>
                <Text>{review.user.name}</Text>
                <StarDisplay rating={review.rating} scale={YELP_SCALE} />
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