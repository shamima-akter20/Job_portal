import React from 'react'
import { Link } from 'react-router-dom'

const JobCard = ({ job }) => {
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
  } = job

  return (
    <div>
      <h1>job cards</h1>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Card Title</h2>
          <p>{description}</p>
          <div className="card-actions">
            <Link to={`/jobs/${_id}`}>
              <button className="btn w-full  ">Apply</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobCard
