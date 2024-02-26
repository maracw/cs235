import React, {useState} from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";


const SearchScreen =()=>{
    //state searchTerm
    const [term, setTerm] = useState('');
    const [businesses, setBusinesses] = useState([]);
    const [errorMessage, setErrorMessage] =useState('');

    //set up API with axios
    const searchApi = async ()=>{
        try{
            console.log(term);
            const response = await yelp.get('/search', {
                params: {
                    limit: 25,
                    term: term,
                    location: 'eugene'
            }});
            //const newBusinessList = response.data.businesses;

            //error handling
            setBusinesses(response.data.businesses);
            // console.log(businesses[0]);
            console.log(response.config.url);
        }
        catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong.');
        }
        
    }
    const firstBusiness = () =>{
        if(businesses != null){
            return businesses[0].name;
        }
       else {
        return 'no data yet';}
    };
   
    return <View>
        <Text>Search Screen</Text>
        <SearchBar
            autoCapitalize='false'
            autoCorrect='false'
            term={term}
            onTermChange={(term) => {setTerm(term)}}
            onTermSubmit={searchApi}>
        </SearchBar>
        <Text>search: {term}</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>Number of AMAZING Businesses found : {businesses.length}</Text>
        {businesses.length>0 ? <Text>{businesses[0].name}</Text> : null}
    </View>
};

const styles = StyleSheet.create({});

export default SearchScreen;