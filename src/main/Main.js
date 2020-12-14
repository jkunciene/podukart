import React, {useState, useEffect} from 'react'

import Seach from '../search/Seach';
import Films from '../films/Films'

const Main = () => {
    //STATE - TOP LEVEL: always called in the exact same place
    //first for search word
    const [searchValue, setSearchValue] = useState('')
    //for search results array-films from api
    const [films, setFilms] = useState([])

    //useEffect need two values - method & value
    //method will be execute only when value is change

    const inputValue=(val)=>{
        setSearchValue(val);
    }

    const getFillms = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`
        const response = await fetch(url)
        const responseJson = await response.json();
        setFilms(responseJson)
    }
    useEffect(() => {
        getFillms(searchValue);
    }, [searchValue])


    if(films.Response==="True") {
        return (
            <div className='container'>
                <Seach inputValue={inputValue}/>
                <Films films={films}/>
            </div>

        )
    } else {
        return ( <Seach inputValue={inputValue}/>)
    }

}

export default Main
