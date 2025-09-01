import {configureStore} from '@reduxjs/toolkit'
import search from './searchSlice.js'
import savejobs from './savejobsSlice.jsx'
import filter from './filterSlice.js'
const store = configureStore({
    reducer:{
        search:search,
        savejobs:savejobs,
        filter:filter
    }
})

export default store