import React,{useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { saveJob } from '../store/savejobsSlice';
import { useDispatch } from 'react-redux';
import {useJobs}from '../utils/fetchjobs'
import { filterJobsData } from '../store/filterSlice';
import { useSelector } from 'react-redux';
const Joblistingdata = ()=> {
  const [filterseclection,setFilterselection] = useState("")
  const dispatch = useDispatch();
    const searchTerm = useSelector((state)=>state.search.searchTerm);
    console.log(searchTerm);
    const{jobs} = useJobs(searchTerm);
    localStorage.setItem("jobsData",JSON.stringify(jobs))
    // console.log(jobs);
    const handleFilterSelection = (e)=>{
            const value= e.target.name
            console.log(value);
            
            setFilterselection(value)
            dispatch(filterJobsData(value))
            console.log(filterseclection);
            
    }
    const filteredJobs = useSelector((state)=>state.filter.filter);
    console.log("Filtered Jobs from Redux:", filteredJobs);
  return (
    <div className="flex gap-6 p-6">
      <aside className="w-2/5  p-6 min-h-full rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-light-800">Filter Jobs</h2>
        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-purple-600" name="Remote" onChange={handleFilterSelection} /> Remote
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-purple-600" name="Onsite"   onChange={handleFilterSelection} /> Onsite
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-purple-600"   onChange={handleFilterSelection} /> Full-time
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-purple-600"   onChange={handleFilterSelection} /> Part-time
          </label>
        </div>
      </aside>
      <main className="w-3/5 space-y-4">
        {(filteredJobs && filteredJobs.length > 0 ? filteredJobs : jobs).map((job) => (
            <Accordion
              key={job.slug}
              className="!bg-slate-700 !text-white rounded-xl p-5 !shadow-lg"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white accent-purple-600" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span" className="w-full">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-lg font-bold">{job.title}</h1>
                    <div className="flex items-center gap-4 text-gray-300 text-sm">
                      <span>{job.location}</span>
                      <span>|</span>
                      {job?.remote ? <span>Remote</span> : <span>Onsite</span>}
                    </div>
                  </div>
                </Typography>
              </AccordionSummary>

              <AccordionDetails className=" !text-white">
                <div className="space-y-3 flex justify-center flex-col">
                  <div className="text-gray-400 text-sm mb-5">
                    <p className="">Job ID: {job.slug}</p>
                    <span className="font-semibold">Company Name:{job.company_name}</span>
                  </div>

                  <Link to={`/jobsearch/${job.slug}`}>
                    <Button
                      variant="contained"
                      className="!bg-purple-600 !rounded-lg hover:!bg-purple-700"
                    >
                      Read full job description
                    </Button>
                  </Link>
                  <Button
                      variant="contained"
                      className="!bg-purple-600 !rounded-lg hover:!bg-purple-700"
                      onClick={()=>{dispatch(saveJob(job))}}
                    >
                    Save
                    </Button>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
      </main>
    </div>
  );
}

export default Joblistingdata
