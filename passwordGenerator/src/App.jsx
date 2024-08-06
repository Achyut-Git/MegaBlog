import { useState } from 'react'
import './App.css'
import Components from './Components'

function App() {
  const [chars, setChars] = useState(false)
  
return <Components chars={chars} setChars={setChars}> 
<p>Trying to send children as prop</p>
</Components>
}

export default App
