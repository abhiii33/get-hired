import {configureStore} from '@reduxjs/toolkit'
import search from './searchSlice.js'
// import filter from "./filterSlice.js"
const store = configureStore({
    reducer:{
        search:search,
        // filter:filter
    }
})

export default store