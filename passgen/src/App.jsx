import { useCallback, useState , useEffect} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(() => {
let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if (numberAllowed) str += "0123456789"
if (charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="
for(let i=1; i<=length; i++) {
  let char= Math.floor(Math.random() * str.length + 1)
pass += str.charAt(char)
}
setPassword(pass)
}, [length, numberAllowed, charAllowed, setPassword])

useEffect(() => {
  passwordGenerator()
}  , [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-center text-orange-500 bg-gray-800'>Password Generator
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-white' placeholder='password' readOnly />
        <button className='bg-blue-600 p-4 outline-none shrink-0 text-white'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
           min={6} 
           max={100} 
           value={length}
            className='cursor-pointer' 
            onChange={(e)=> {setLength(e.target.value)}}/>
            <label>Length: {length}</label>
        </div>
         <div className='flex items-center gap-x-1'>
          <input type="checkbox"
           checked={numberAllowed}
         defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev) => !prev);
          }}
            />
            <label>Number</label>
        </div>
         <div className='flex items-center gap-x-1'>
         <input type="checkbox"
           checked={charAllowed}
         defaultChecked={charAllowed}
          id='charInput'
          onChange={()=>{
            setCharAllowed((prev) => !prev);
          }}
            />
            <label>Char</label>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default App
