import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import HikeDetail from "../components/HikeDetail";

const FavoriteScreen = () => {

  return <View>
    <Text style={styles.text}>This is a view of the Favorite Screen.</Text>
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
  },
});

export default FavoriteScreen;
