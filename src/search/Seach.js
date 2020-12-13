import React from 'react'

const Seach = (props) => {
    console.log(props)
    return (
        <div>
             <input type='text'
                placeholder='search your film...'
                value={props.value}
                onKeyPress={(e)=>{props.setSearchValue(e.target.value)}}
                />
        </div>
    )
}

export default Seach
