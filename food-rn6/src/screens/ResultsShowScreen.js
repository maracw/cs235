import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { Linking, Platform } from 'react-native';
import yelp from "../api/yelp";
import { A } from '@expo/html-elements';
import { useNavigation } from "@react-navigation/native";

const ResultsShowScreen = ({ route }) => {
  const navigation = useNavigation();

  const [result, setResult] = useState(null);
  const id = route.params.id;
  
  //sample code from https://www.devsamples.com/javascript/react-native/make-call-when-phone-number-clicked
  const callPhoneNumber = async (number) => {
    const phoneNumber = `${Platform.OS !== 'android' ? 'telprompt' : 'tel'}:${number}`;  

    try {
        const supported = await Linking.canOpenURL(phoneNumber);
        console.log(phoneNumber +' can open is ' + supported);
        if (supported) Linking.openURL(phoneNumber);
    } catch (error) {
        console.log(error);
    }
};

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    await setResult(response.data);
    console.log(id);
  };
  useEffect(() => {
    getResult(id);
  }, []);
 
  if (!result) {
    return null;
  }
 
  return (
    <View>
        <Text style={styles.titleStyle}>{result.name}</Text>
        <Text style={styles.textStyle}>{result.location.address1}, {result.location.city}, {result.location.state} {result.location.zip_code}</Text>
        <TouchableOpacity onPress={()=>callPhoneNumber(result.phone)} >
          <Text style={styles.linkStyle}>{result.phone}</Text>
        </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate("Reviews", { id: result.id, businessName: result.name })
              }>
        <Text style={styles.linkStyle}>Reviews</Text>
      </TouchableOpacity>
      
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 28,
    marginLeft: 15,
    fontWeight: 'bold'
  },
  textStyle :{
    fontSize:18,
    marginLeft:15
  },
  image: {
    height: 200,
    width: 300,
    marginBottom: 10,
    marginLeft: 15,
  },
  linkStyle : {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  reviewStyle :{

  }
});
 
export default ResultsShowScreen;


