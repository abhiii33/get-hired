import React from 'react'
import {useParams} from 'react-router-dom'
const Jobdetails = () => {
const {slug} = useParams();
const {jobs}=useJobs(slug);
  return (
    <div>
      {console.log(jobs)}
    </div>
  )
}

export default Jobdetails
