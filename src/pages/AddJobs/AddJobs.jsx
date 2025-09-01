import React from 'react'
import Swal from 'sweetalert2'
import useAuth from '../../hooks/useAuth'

const AddJobs = () => {
  const { user } = useAuth()

  const handleAddJob = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(formData.entries())
    const initialData = Object.fromEntries(formData.entries())
    console.log(initialData)
    const { min, max, currency, ...newJob } = initialData
    console.log(newJob)
    newJob.salary_range = { min, max, currency }
    newJob.requirements = newJob.requirements.split('\n')
    newJob.responsibilities = newJob.responsibilities.split('\n')
    console.log(newJob)

    fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Job Successfully Added!',
            icon: 'success',
            draggable: true,
          })
        }
      })
  }

  return (
    <div className="bg-base-100 shadow-2xl">
      <h1 className="text-4xl text-[#123458]  mt-6 font-bold flex items-center justify-center">
        Add jobs
      </h1>

      <div className="card  w-full  ">
        <div className="card-body">
          <form onSubmit={handleAddJob} className="fieldset">
            {/* -------------- company name and logo ------------ */}
            <div className="flex gap-4">
              {/* Company name */}
              <div className="flex-1">
                <legend className="fieldset-legend">Company Name</legend>

                <input
                  type="text"
                  className="input w-full"
                  required
                  placeholder="Company Name"
                  name="company"
                />
              </div>

              {/* Company logo */}
              <div className="flex-1">
                <legend className="fieldset-legend">Company Logo</legend>

                <input
                  type="URL"
                  className="input w-full"
                  required
                  placeholder="Company logo url"
                  name="company_logo"
                />
              </div>
            </div>

            {/* --------job title and location----------------- */}
            <div className="flex gap-4">
              {/* Job title */}
              <div className="flex-1">
                <legend className="fieldset-legend">Job Title</legend>

                <input
                  type="text"
                  className="input w-full"
                  required
                  placeholder="Job Title"
                  name="title"
                />
              </div>

              {/* job location */}
              <div className="flex-1">
                <legend className="fieldset-legend">Location</legend>

                <input
                  type="text"
                  className="w-full input"
                  placeholder="Location"
                  name="location"
                  required
                />
              </div>
            </div>
            {/* --------  HR name and HR email ----------------- */}
            <div className="flex gap-4">
              {/* HR name*/}
              <div className="flex-1">
                <legend className="fieldset-legend">HR Name</legend>

                <input
                  type="text"
                  className="input w-full"
                  required
                  placeholder="HR Name"
                  name="hr_name"
                />
              </div>

              {/* HR EMAIL*/}
              <div className="flex-1">
                <legend className="fieldset-legend">HR Email</legend>

                <input
                  defaultValue={user?.email}
                  type="email"
                  className="w-full input"
                  placeholder="HR Email"
                  name="hr_email"
                  required
                />
              </div>
            </div>

            {/* application_deadline*/}
            <div className="flex-1">
              <legend className="fieldset-legend">Application Deadline</legend>

              <input
                type="date"
                className="w-full input"
                placeholder="Application Deadline"
                name="application_deadline"
                required
              />
            </div>

            {/* --------- job type and job field ---------- */}
            <div className="flex gap-4">
              {/* job type */}
              <fieldset className="fieldset flex-1">
                <legend className="fieldset-legend">Job Type</legend>
                <select
                  defaultValue="Pick a Job Type"
                  name="jobType"
                  className="w-full select">
                  <option disabled>Pick a Job Type</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Intern</option>
                </select>
              </fieldset>

              {/* job field */}
              <fieldset className="fieldset flex-1 ">
                <legend className="fieldset-legend">Job Field</legend>
                <select
                  defaultValue="Pick a Job Field"
                  className="w-full select">
                  <option disabled>Job Field</option>
                  <option>Engineering</option>
                  <option>Marketing</option>
                  <option>Finance</option>
                  <option>Teaching</option>
                </select>
              </fieldset>
            </div>

            {/* salary range */}
            <legend className="mt-2 fieldset-legend">Salary Range</legend>
            <div className="  md:flex gap-4">
              {/* salary range min*/}
              <div className="flex-1 my-2">
                {' '}
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Min"
                  name="min"
                  required
                />
              </div>

              {/* salary range max*/}
              <div className="flex-1 my-2">
                {' '}
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Max"
                  name="max"
                  required
                />
              </div>
              {/* salary currency */}
              <div className="flex-1 my-2">
                <select
                  name="currency"
                  defaultValue="Currency"
                  className="w-full select">
                  <option disabled>Currency</option>
                  <option>BDT</option>
                  <option>USD</option>
                  <option>INR</option>
                </select>
              </div>
            </div>

            {/* description */}

            <legend className="fieldset-legend">Description</legend>
            <input
              type="text"
              className="textarea input w-full"
              required
              placeholder="Description"
              name="description"
            />
            {/* Requirements */}

            <div>
              <legend className="fieldset-legend">Requirements</legend>
              <textarea
                className="textarea input w-full"
                required
                placeholder="Write each requirement in a new line"
                name="requirements"
                rows={5}
              />
            </div>
            {/* Responsibilities */}

            <div>
              <legend className="fieldset-legend">Responsibilities</legend>
              <textarea
                className="textarea input w-full"
                required
                placeholder="Write each Responsibilities in a new Line"
                name="responsibilities"
                rows={5}
              />
            </div>

            <button className="btn bg-[#123458]  w-full btn-neutral mt-4">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddJobs
