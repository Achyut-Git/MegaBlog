import { configureStore } from "@reduxjs/toolkit";
import bookSliceReducer from './Slices'


const store = configureStore({
    reducer: {
       books: bookSliceReducer
    }
    
})

export default store
//When you create a slice using createSlice, you define the reducer logic and actions for that slice. However, to make the reducer part of the Redux store, you need to explicitly add it to the store configuration. This step is necessary because the store is the central place where all your application’s state is managed, and it needs to know about all the reducers that will handle different parts of the state.