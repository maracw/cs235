import React, { useEffect, useState } from "react";
import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";

const GalleryScreen = ()=>{
    return (
        <ScrollView>
            <Text>Gallery Screen</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default GalleryScreen;