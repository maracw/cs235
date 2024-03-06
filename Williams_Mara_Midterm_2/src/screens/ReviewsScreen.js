import React, {useState, useEffect}from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import yelp from "../api/yelp";
import ReviewItem from "../components/ReviewItem";

const ReviewScreen = ( {route} ) => {
    const id = route.params.id;
    const businessName = route.params.businessName;
    const [reviews, setReviews] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    // make request to reviews endpoint
    const getReviews = async (id) =>{
        try {
            const response = await yelp.get(`/${id}/reviews`);
            setReviews(response.data.reviews);
        }
        catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong.');
        }

    };
    const hasReviews = reviews.length>0? true : false;
  
    useEffect(()=>{
        getReviews(id);
    }, []);


    return (
        <View>
            <Text style={styles.titleStyle}>{businessName}</Text>
            {hasReviews? <FlatList 
                data={reviews}
                keyExtractor={(review) => review.id}
                renderItem={({ item }) => {
                    return<ReviewItem review={item}></ReviewItem>
                }}
            /> : <Text style={styles.errorStyle}>{errorMessage}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle :{
        fontSize: 28,
        fontWeight: 'bold',
        margin: 15
    },
    errorStyle :{
        color: 'red'
    }
});

export default ReviewScreen;