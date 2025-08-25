import {configureStore} from '@reduxjs/toolkit'
import search from './searchSlice.js'
const store = configureStore({
    reducer:{
        search:search
    }
})

export default store