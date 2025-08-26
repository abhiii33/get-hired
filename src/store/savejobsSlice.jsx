    import {createSlice} from '@reduxjs/toolkit'
 const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    const savejobs = createSlice({
        name:'savejobs',
        initialState:{
            savedJobs:savedJobs
        },
        reducers:{
            saveJob:(state,action)=>{
                console.log("action in saveJob",action.payload);
                const jobExists = state.savedJobs.find(job => job.slug === action.payload.slug);
                if(jobExists) return;
        const jobssaved =  {title:action.payload.title,
            company_name:action.payload.company_name,
            location:action.payload.location,
            slug:action.payload.slug,
            url:action.payload.url,
        }
        localStorage.setItem("savedJobs",JSON.stringify([...state.savedJobs,jobssaved]))
        state.savedJobs.push(jobssaved);
       
                console.log("state in saveJob",jobssaved);
            }
        }
    })
    export const {saveJob} = savejobs.actions

    export default savejobs.reducer
