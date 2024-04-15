import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key, setter) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    setter(result); 
  } else {
    setter("Friend"); // Set to "Friend" if no value is stored
    await save(key, "Friend"); // Optionally, save "Friend" as the default name
  }
}

export default function App() {
  const [storedName, setStoredName] = useState('');
  const [inputName, setInputName] = useState('');

  useEffect(() => {
    getValueFor("name", setStoredName);
  }, []); 

  const changeName = async () => {
    if (inputName.trim() !== '') {
      await save("name", inputName); 
      setStoredName(inputName);
      setInputName('');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js, {storedName}, to start working on your app!</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInputName}
        value={inputName}
        placeholder="Enter a new name"
      />
      <Button title="Change Name" onPress={changeName} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderColor: 'gray',
  },
});
