import React,{useState, useEffect} from 'react'

export default function UseEffect() {
  
    const [count, setcount] = useState(1)
    const [data, setdata] = useState([])
  
    useEffect(()=>{
      
      async function getData(){
        const res = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${count}&idStarts=1001`)
        const response = await res.json();
         setdata(response)
         console.log(response)
      }
      getData();
    },[]) 

    const handleOnClick=()=>{
        setcount(count+1)
      }
  
  return (
    <div>
      <button onClick={handleOnClick}>Click me {count}</button>
      {data.map((element,index)=>(
        <div key={index}>
        <h4>{element.firstName}</h4>
        <p>{element.contactNumber}</p>
        </div>
      ))}
    </div>
  )
}
