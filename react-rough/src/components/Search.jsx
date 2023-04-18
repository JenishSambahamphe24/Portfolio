import React, { useState } from 'react'

function Search(props) {

    const {getDataFromSearch}=props;
    const [inputValue, setInputValue] = useState('')

    const handleOnSubmit =(e)=>{
        e.preventDefault();
        getDataFromSearch(inputValue)
    }
    
    const handleOnChange =(e)=>{
        setInputValue(e.target.value)
    }
    
     
  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleOnSubmit}>
        <input className="form-control me-2" value={inputValue}  placeholder="Search" onChange={handleOnChange}/>
        <button className="btn btn-outline-success">Submit</button>
      </form>      
    </div>
  )
}

export default Search