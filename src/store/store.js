import {configureStore} from '@reduxjs/toolkit'
import search from './searchSlice.js'
import savejobs from './savejobsSlice.jsx'
const store = configureStore({
    reducer:{
        search:search,
        savejobs:savejobs
    }
})

export default store