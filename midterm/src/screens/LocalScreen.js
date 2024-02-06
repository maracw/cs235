import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import HikeDetail from "../components/HikeDetail";

const basePath = '../../assets/';

const LocalScreen = () => {

  return <View style={styles.localContainer}>
    <Text style={styles.text}>Local Hikes</Text>
    <HikeDetail title='Mount Pisgah Via Trail #1'
      miles={3.1}
      level='Moderate'
      imageSource = {require(basePath + 'mtPisgah-square.webp')}> </HikeDetail>

    <HikeDetail title='Mossy Maple Trail'
      miles={5.2}
      level='Moderate'
      imageSource = {require(basePath + 'mossyMaple-square.webp')}></HikeDetail>

    <HikeDetail title='Ribbon Trail to Floral Hill'
      miles={1.6}
      level='Moderate'
      imageSource = {require(basePath + 'ribbon.webp')} />
  </View>
};

const styles = StyleSheet.create({
  localContainer: {
    padding: 20
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold', 
    marginBottom: 10
  },
});

export default LocalScreen;
