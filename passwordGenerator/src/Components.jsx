import React from 'react'
import { useState, useEffect } from 'react'

function Components({chars, setChars, children}) {
    const upperCase = [ ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),]
    let lowerCase = [ ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)),]
    let numbers = [...Array.from({ length: 10 }, (_, i) => String(i))]
    let Characters = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', '<', '>', ',', '.', '?']
    const [password, setPassword] = useState('')
    const [length, setLength] = useState(6)
    const [allowNumbers, setAllowNumbers] = useState(false)
    const [smallLetters, setSmallLetters] = useState(false)
    
   

  
useEffect(()=>{
  
    let createPassword = upperCase
  
     if(allowNumbers){
         createPassword = createPassword.concat(numbers)
     }
     if(smallLetters){
       createPassword = createPassword.concat(lowerCase)
     }
     if(chars){
      createPassword = createPassword.concat(Characters)
     }
  
     let newPassword = ''
    for (let i = 0; i < length; i++) {
        let addPassword = Math.floor(Math.random()*createPassword.length)  //we want to stay less or equal to the length of the array
         newPassword += createPassword[addPassword]
      
        }
      
        setPassword(newPassword)
  
  },[length, allowNumbers, smallLetters, chars])
    
  
    return (
      <>
        <textarea  onChange={(e)=> e.target.value} value={password}></textarea>
        <input type="range" onChange={(e)=> setLength(e.target.value)}/>
        <input  id="num" type='checkbox' onChange={()=>{setAllowNumbers((prev)=> !prev)}}/> <label htmlFor="num">Number</label>
        <input type='checkbox' onChange={()=>{setChars((prev)=> !prev)}}/>Characters
        <input type='checkbox' onChange={()=>{setSmallLetters((prev)=> !prev)}}/>Small Letters
        <h2>{children}</h2>
      </>
    )
}

export default Components