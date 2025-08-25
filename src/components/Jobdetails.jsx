import React from 'react'
import {useParams} from 'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useJobs } from '../utils/fetchjobs';
const Jobdetails = () => {
const {slug} = useParams();
const {jobs}=useJobs(null,slug);
  return (
    
    <div className="flex justify-center px-4 py-8">
  <div className="w-full max-w-5xl space-y-6">
    {jobs.length > 0 &&
      jobs.map((job) => (
        <Accordion
          key={job.slug}
          className="!bg-slate-700 !text-white rounded-xl p-5 !shadow-lg"
        >
          {/* Accordion Header */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white accent-purple-600" />}
            aria-controls="panel1-content"
            id={`panel-${job.slug}-header`}
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

          {/* Accordion Details in two-column layout */}
          <AccordionDetails className="!text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column (optional for description / extra info later) */}
              <div className="space-y-3 flex flex-col">
                <div className="text-gray-400 text-sm mb-5">
                  <p>Job ID: {job.slug}</p>
                  <span className="font-semibold">Company Name: {job.company_name}</span>
              
                </div>
              </div>

              {/* Right column (extra actions / buttons / summary) */}
              <div className="flex items-start justify-start md:justify-end">
                <button className="px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
                  Apply Now
                </button>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
  </div>
</div>

  )
}

export default Jobdetails
