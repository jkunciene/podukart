import React, {useState} from 'react'

function Seach({inputValue}) {

    const [movieTitle,setMovieTitle]= useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(movieTitle===""){
            alert("Iveskite filmo pavadinima")
        } else{
            inputValue(movieTitle);
            setMovieTitle("");
        }

    }
    return (

        <div className='container'>
            <h2 className='row justify-content-center'>Find your movie</h2>
            <form className='row  justify-content-center' onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        onChange={(e)=>setMovieTitle(e.target.value)}
                        value={movieTitle}
                        className="form-control"
                        placeholder="Write movie title"/>
                </div>
            </form>
        </div>

    )
}

export default Seach
