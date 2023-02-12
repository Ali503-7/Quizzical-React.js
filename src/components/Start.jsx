import '../Style/Start.css'
import { useState } from 'react'
function Start(props) { 
  const Start = () => {
    props.setStart(true)
  }



  return (
    !props.Start &&
    <div className="Start-B">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={Start}>Start quiz</button>
    </div>
  )
}

export default Start

