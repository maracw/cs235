import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LaneScreen from './screens/LaneScreen';
import CatScreen from './screens/CatScreen';
import DogScreen from './screens/DogScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions = {({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Lane') iconName = 'school';
          else if (route.name === 'Cat') iconName = 'cat';
          else if (route.name === 'Dog') iconName = 'dog';

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Lane" component={LaneScreen} />
      <Tab.Screen name="Cat" component={CatScreen} />
      <Tab.Screen name="Dog" component={DogScreen} />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}