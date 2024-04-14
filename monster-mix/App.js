import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BuildMonsterScreen from './src/screens/BuildMonsterScreen';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import GalleryItem from './src/components/GalleryItem';
import GalleryScreen from './src/screens/GalleryScreen';

const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Monster Mix" }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Build" component={BuildMonsterScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
