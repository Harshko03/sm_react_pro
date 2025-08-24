import React from 'react'
import { useState } from 'react'

function App() {
   const [Button, setButton] = useState(true)

   
  return (
    <div>
      <button onClick={()=>{setButton((prev) => !prev)}}>{Button?"Login":"Logout"}</button>
    </div>
  )
}

export default App
