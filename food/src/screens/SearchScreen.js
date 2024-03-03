import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

    
const SearchScreen =()=>{
   
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const hasResults = results.length>0? true : false;

    const filterResultsByPrice = (price) =>{
        //price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price == price;
        });
    };

    return <View style={{flex:1}}>
        <SearchBar
            autoCapitalize='false'
            autoCorrect='false'
            term={term}
            onTermChange={(term)=>{setTerm(term)}}
            onTermSubmit={()=>{searchApi(term)}}>
        </SearchBar>
        {hasResults? <Text style={styles.textStyle}>Number of results : {results.length}</Text> : <Text style={styles.textStyle} >{errorMessage}</Text> }
        <ScrollView>
            <ResultsList title = 'Cost Effective'
                results={filterResultsByPrice('$')}/>
            <ResultsList title = 'Bit Spendier'
                results={filterResultsByPrice('$$')}/>
            <ResultsList title = 'Fancy Eats'
                results={filterResultsByPrice('$$$')}/>
        </ScrollView>
        
    </View>
};

const styles = StyleSheet.create({
    textStyle :{
        marginLeft: 10,
    }
});

export default SearchScreen;