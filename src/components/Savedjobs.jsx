import React from 'react'
import { useSelector } from 'react-redux'

const Savedjobs = () => {
  const savedJobs = useSelector(state => state.savejobs.savedJobs)
  console.log("savedJobs in savedjobs",savedJobs);
  

  return (
    <div>
      {savedJobs && savedJobs.map((job, index) => (
        <div key={index} className='border p-4 m-4 rounded shadow-md'>
          <h2 className='text-xl font-bold mb-2'>{job.title}</h2>
          <p className='text-gray-600 mb-1'>Company: {job.company_name}</p>
          <p className='text-gray-600 mb-1'>Location: {job.location}</p>
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className='text-blue-500 underline'
          >
            View Job
          </a>
        </div>
      ))}
    </div>
  )
}

export default Savedjobs
