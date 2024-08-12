import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { addBook,removeBook } from "../Store/Slices";
import { nanoid } from "@reduxjs/toolkit";


const library = ()=>{
  
    const [input, setInput] = useState([])

    const dispatch = useDispatch()
    const books = useSelector(state => state.books)

  const handleAddBook = () =>{
      setInput('')
    dispatch(addBook({id: nanoid(), title: input,  author:'unknown'}))
  }
  const handleRemoveBook = (id) =>{
    dispatch(removeBook({id}))
    console.log({id})
  }
    return (
        <>
        <ul>
            <button onClick={handleAddBook}>Add Book</button>
            <br />
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
            {books.map((individualBook)=> 
            <li key={individualBook.id} style={{listStyle: 'none'}}>{individualBook.title} by {individualBook.author}
            <button onClick={()=>handleRemoveBook(individualBook.id)}>Remove</button>
            </li>
            )}
        </ul>
        </>
    )
}

export default library