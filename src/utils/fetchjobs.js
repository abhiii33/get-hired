import {useState,useEffect} from 'react'
import axios from 'axios'

const API_URL = "https://www.arbeitnow.com/api/job-board-api"

export const useJobs=(searchTerm,slug)=>{
    console.log("search term in useJobs",searchTerm);
    
    const [jobs,setJobs] = useState([])
 useEffect(()=>{
    const fetchJobs = async()=>{
    try {
        const response = await axios.get(API_URL);
        console.log(response.data);
        const allJobs = response.data.data;
        if(searchTerm){
            const filteredJobs = allJobs.filter((job)=>
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.location.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setJobs(filteredJobs);
        }
        else if(slug){
            const specificJob = allJobs.filter((job)=>job.slug === slug)
            setJobs(specificJob);
            console.log(specificJob);
            
        }
        else{
            setJobs(allJobs);
        }
        // return jobs;
    } catch (error) {
        console.log(error);
    }
}
fetchJobs()
 },[searchTerm,slug])
 return {jobs};
}