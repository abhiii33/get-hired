import React,{useState} from 'react'
import { useEffect } from 'react'
import {useJobs} from '../utils/fetchjobs'
import {useDispatch,useSelector} from 'react-redux'
import { fetchSearchTerm } from '../store/searchSlice'
const Search = () => {
    const dispatch = useDispatch();
    
    const[searchTerm,setSearchTerm]=useState("");
    const handleChange=(e)=>{
       const value= e.target.value
       setSearchTerm(value);
         console.log(searchTerm);  
         dispatch(fetchSearchTerm(value));
    }
    // useEffect(()=>{
    //     useJobs(searchTerm);
    // },[searchTerm])
     return (
    <div className="search flex justify-center p-14">
      <input type="text" placeholder="search" value={searchTerm} name="searchjob" 
      onChange={handleChange}
      className="w-3/4 md:w-1/2 p-3 rounded-xl border border-gray-600 
               bg-gray-900 text-white placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-blue-500 
               shadow-md"
       />
    </div>
  )
}

export default Search
