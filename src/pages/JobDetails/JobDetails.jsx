import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    application_deadline,
    salary_range,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_name,
    hr_email,
    company_logo,
  } = useLoaderData()

  return (
    <div>
      <h1>Job Details</h1>
      <p>{company}</p>

      <button className="btn btn-wide">Apply Now</button>
    </div>
  )
}

export default JobDetails
