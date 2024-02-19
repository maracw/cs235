import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BoxScreen from './screens/BoxScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BoxScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
