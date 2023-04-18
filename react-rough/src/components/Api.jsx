import React,{useEffect,useState} from 'react'

export default function Api() {
    const [email, setemail] = useState('')
    
   async function getEmployee(){
    const apiResponse = await fetch('https://uers-api.p.rapidapi.com/api/users',{
        headers: {
            'X-RapidAPI-Key': '42432fdb13msh6c9817ebd13721cp1da5cfjsn4faea2c145e3',
            'X-RapidAPI-Host': 'uers-api.p.rapidapi.com'
   }}
   )
   const response = await apiResponse.json();
   const {responses} = response;
   setemail(responses[0].Email)
   }
   
   
   useEffect(() => {
       getEmployee();
    }, []);

    const handleOnClick = () => {
        console.log(email);
      };

  return (
    <div>
      <h1>Hello Jenish</h1>
      <button onClick={handleOnClick}>Click here</button>
      <h4>first person email is:{email}</h4>
    </div>
  )
}
