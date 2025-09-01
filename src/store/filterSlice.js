import {createSlice} from '@reduxjs/toolkit'
 const jobsData = JSON.parse(localStorage.getItem("jobsData")) || [];
const filter = createSlice({
    name:"filter",
    initialState:{
        filter:jobsData
    },
    reducers:{
            filterJobsData:(state,action)=>{
                const filteredDta = state.filter.filter((job) => {
                    return (
                        (job.remote && action.payload === "Remote") ||
                        (!job.remote && action.payload === "Onsite") 
                        // (job. && action.payload === "Full-time") ||
                        // (!job.fulltime && action.payload === "Part-time")
                    );
                });
                state.filter = filteredDta;
                console.log("Filtered Data:", filteredDta);
            }
    }
})
export const {filterJobsData} = filter.actions

export default filter.reducer