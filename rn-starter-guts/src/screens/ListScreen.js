import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';


const headingText = 'Friend List!';

const friends = [
    { name: 'Friend #1', age: 20, pets: '1'},
    { name: 'Friend #2', age: 30, pets: '2'},
    { name: 'Friend #4', age: 40, pets: '3'},
  ];

  const friendsExtractor = [
    { name: 'Friend #1', age: 20, pets: 4},
    { name: 'Friend #2', age: 30, pets: 2},
    { name: 'Friend #4', age: 30, pets: 5}
    
  ]
const ListScreen = () => {
    // return <View>
    //     <Text style={styles.heading}>{headingText}</Text>
    //     <FlatList 

    //         keyExtractor = {friend => {friend.name}}
    //         data={friendsExtractor} 
    //         renderItem={({item})=>{
    //             return <Text style = {styles.list}>{item.name} has {item.pets} pets.</Text>
    //         }}>    
    //     </FlatList>
    // </View>;
    return (
        <FlatList 
          keyExtractor = {friend => friend.name}
          data={friends} 
          renderItem={({ item }) => { 
            return <Text>{item.name} has {item.pets} pets.</Text>;
          }} 
        /> 
      );
};

const styles = StyleSheet.create({
    heading : {
        fontSize: 40,
        textAlign: 'center'
    },
    list : {
        marginVertical: 40,
        marginHorizontal : 25
    }
});

export default ListScreen;