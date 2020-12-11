import React, {useState, useEffect} from 'react'
import Films from '../films/Films';
import Seach from '../search/Seach';

const Main = () => {
    //STATE - TOP LEVEL: always called in the exact same place
    const[searchValue, setSearchValue]=useState('')
    //for search results array-films from api
    const[films, setFilms]=useState([])

    //useEffect need two values - method & value
    //method will be execute only when value is change
const getFillms = async (searchValue)=>{
    const url =`http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`
    const response = await fetch(url)
    const responseJson = await response.json();
    if(responseJson.Search){setFilms(responseJson.Search) }  
}
    useEffect(()=>{ 
         getFillms(searchValue)  ;  
    }, [searchValue])


    return (
        <div>            
               <Seach searchValue={searchValue} setSearchValue={setSearchValue}/>
               <Films films={films}/>
        </div>
    )
}

export default Main
