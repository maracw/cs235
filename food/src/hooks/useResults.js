import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default ()=>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] =useState('');

    //set up API with axios
    const searchApi = async (searchTerm)=>{
        //reset error message
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'eugene'
            }});
            setResults(response.data.businesses);
             //reset error message
            setErrorMessage('');

        }
        catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong.');
        }
    }
   
   //call search api ponce before screen first renders 
   //useEffect with two arguments - function, empty array

    useEffect(()=>{
        console.log('useEffect called');
        searchApi('pizza');
    }, []);

    return [searchApi, results, errorMessage];
};