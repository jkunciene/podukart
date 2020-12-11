import { Form } from 'formik';
import React, {useState, useEffect} from 'react'

const Main = () => {
    //STATE - TOP LEVEL: always called in the exact same place
    const[searchValue, setSearchValue]=useState('')
    //for search results array-films from api
    const[films, setFilms]=useState([])

    //useEffect need two values - method & value
    //method will be execute only when value is change

    useEffect(()=>{ 
         fetch(`https://www.omdbapi.com/?apikey=e4db3ced&t=${searchValue}`)
        .then(response => response.json())
        .then(json => setFilms(json))     
    }, [searchValue])

console.log(searchValue)
console.log(films)
    return (
        <div>            
                <input type='text'
                placeholder='search your film...'
                value={searchValue}
                onChange={(e)=> setSearchValue(e.target.value)}/>
            
            
        </div>
    )
}

export default Main
