// In LaneScreen.js
import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

function LaneScreen() {
  return (
    <MapView 
      style = {styles.map}
      initialRegion={{
        latitude: 44.0099442,
        longitude: -123.033411,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    />
  );
}

const styles = StyleSheet.create ({
  map : {
    flex: 1,
 
  }
});

export default LaneScreen;
