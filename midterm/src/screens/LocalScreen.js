import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";


const LocalScreen = () => {

  return <View>
    <Text style={styles.text}>This is a view of the Local Screen.</Text>
    <Image source={require('../../assets/mossyMaple.webp')}></Image>
  </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default LocalScreen;
