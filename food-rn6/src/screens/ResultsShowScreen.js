import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
 
const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;
 
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    await setResult(response.data);
    console.log(result);
  };
  useEffect(() => {
    getResult(id);
  }, []);
 
  if (!result) {
    return null;
  }
 
  return (
    <View>
      <Text>{result.name}</Text>
      <Text>{result.display_phone} or {result.phone}</Text>
      <Text>{result.location.display_address}</Text>
      <Text>{result.location.address1}, {result.location.city}, {result.location.state} {result.location.zip_code}</Text>

    
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
  image: {
    height: 200,
    width: 300,
    marginBottom: 10,
    margin: 20,
  },
});
 
export default ResultsShowScreen;


