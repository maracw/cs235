import react from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
    //value entered into Search needs to be accessed by parent

    return <View style={styles.background}>
        <Feather name="search" size={24} color="black" />
        <TextInput style={styles.inputStyle}  
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}></TextInput>
    </View>
};

const styles = StyleSheet.create({
    background: {
        backgroundColor : '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputStyle :{
        borderColor: '#555',
        borderWidth: 2,
        flex: 1,
        borderRadius: 5,
    }
});

export default SearchBar;