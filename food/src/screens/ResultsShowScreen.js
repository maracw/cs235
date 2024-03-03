import React, {useState, useEffect} from "react";
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({navigation})=>{
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    
    //make request
    const getResult = async id=>{
        console.log(!result);
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
        console.log(!result);
    };

    //only call once
    useEffect(()=>{
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    else {
        return (
            <View>
                <Text >{result.name} {result.display_phone}</Text>
                <FlatList 
                data={result.photos} 
                keyExtractor={(photo)=> photo}
                renderItem={({item})=>{
                    return <View>
                            <Image source={{uri: item}} style={styles.imageStyle}/>
                        </View>;
                }}>
    
                </FlatList>
            </View>
        );

}
   
};

const styles= StyleSheet.create({
    imageStyle : {
        height:200,
        width: 300,
        marginBottom:10,
        borderRadius: 4,
    }
});

export default ResultsShowScreen;