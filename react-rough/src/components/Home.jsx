import React, {useState} from 'react'
import Search from './Search'

export default function Home() {
  
  const [data, setdata] = useState('')

  const getDataFromSearch=(getData)=>{
    console.log(getData)
    setdata(getData)
  }
  return (
    <div>
      <h3>THis is Homepage. Welcome to my Blog {data}</h3>
      <Search getDataFromSearch={getDataFromSearch}/>
    </div>
  )
}
