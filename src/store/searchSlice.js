import {createSlice} from '@reduxjs/toolkit'

const search = createSlice({
    name:'search',
    initialState:{
        searchTerm:""
    },
    reducers:{
        fetchSearchTerm:(state,action)=>{
            state.searchTerm = action.payload;
        }
    }
})
export const {fetchSearchTerm} = search.actions

export default search.reducer