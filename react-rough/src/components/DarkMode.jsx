import React from 'react'
import { useState } from 'react'

export default function DarkMode() {
    const [dark, setdark] = useState({
        text:'dark',
        backGroundColor:'white'
    })

    const changeStyle =()=>{
        if(dark.text === 'dark'){
            setdark.text('white')

        }else{
            settext('dark')
      document.body.style.backgroundColor = "white";
        }
    }
  return (
    <>
      <input className="btn btn-primary" onClick={changeStyle} type="submit" value={`Enable ${text} mode`}/>
    </>
  )
}
