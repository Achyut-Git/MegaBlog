import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'books',
    initialState: [],
    reducers: {
        addBook : (state, action)=>{
           state.push(action.payload)
        },
        removeBook: (state, action)=>{
          return state.filter((individualBook)=> individualBook.id !== action.payload.id)
        }
    }
})

export const {addBook, removeBook} = bookSlice.actions

export default  bookSlice.reducer