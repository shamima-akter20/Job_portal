import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

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

      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-wide">Apply Now</button>
      </Link>
    </div>
  )
}

export default JobDetails
