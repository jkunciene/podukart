import React from 'react'
import './films.css'

const Films = (props) => {
    console.log(props)
        return (
        <div className='filmslayout'>
            {
                props.films.map((movie, index)=>(
                    <div className='filmcard' key={index}>
                        <h3>{movie.Title}</h3>
                        <img src={movie.Poster}/>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Films
