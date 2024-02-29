import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
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

    return <View>
        <Text>Search Screen</Text>
        <SearchBar
            autoCapitalize='false'
            autoCorrect='false'
            term={term}
            onTermChange={(term)=>{setTerm(term)}}
            onTermSubmit={()=>{searchApi(term)}}>
        </SearchBar>
        <Text>search: {term==''? 'default': {term}}</Text>
        {hasResults? <Text>Number of results : {results.length}</Text> : <Text>{errorMessage}</Text> }
        <ResultsList title = 'Cost Effective'
            results={filterResultsByPrice('$')}/>
        <ResultsList title = 'Bit Spendier'
            results={filterResultsByPrice('$$')}/>
        <ResultsList title = 'Fancy Eats'
            results={filterResultsByPrice('$$$')}/>
    </View>
};

const styles = StyleSheet.create({});

export default SearchScreen;