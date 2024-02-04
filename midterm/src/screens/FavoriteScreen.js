import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const FavoriteScreen = () => {

  return <View>
    <Text style={styles.text}>This is a view of the Favorite Screen.</Text>
  </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default FavoriteScreen;
