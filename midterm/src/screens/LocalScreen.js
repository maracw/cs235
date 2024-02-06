import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import HikeDetail from "../components/HikeDetail";

const basePath = '../../assets/';

const LocalScreen = () => {

  return <View>
    <Text style={styles.text}>Local Hikes</Text>
    <HikeDetail title='Mount Pisgah Via Trail #1'
      miles={3.1}
      level='Moderate'
      imageSource = {require(basePath + 'mtPisguh.webp')} />
    <HikeDetail title='Mossy Maple Trail'
      miles={5.2}
      level='Moderate'
      imageSource = {require(basePath + 'mossyMaple.webp')} />
    <HikeDetail title='Ribbon Trail to Floral Hill'
      miles={1.6}
      level='Moderate'
      imageSource = {require(basePath + 'ribbon.webp')} />
  </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default LocalScreen;
