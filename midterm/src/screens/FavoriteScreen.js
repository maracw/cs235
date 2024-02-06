import React from "react";
import { Text, StyleSheet, View } from "react-native";
import HikeDetail from "../components/HikeDetail";

const FavoriteScreen = () => {

  return <View>
    <Text style={styles.text}>Favorite Hike</Text>
    <HikeDetail title = 'Ribbon Trail to Floral Hill'
      imageSource={require('../../assets/ribbon.webp')}
      miles={1.6}
      level='Moderate'
    />
  </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold', 
    marginTop: 10
  },
});

export default FavoriteScreen;
