import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Swal from 'sweetalert2'

const JobApply = () => {
  const { id } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  // console.log(id, user)

  const submitJobApplication = (e) => {
    e.preventDefault()
    const form = e.target
    const linkedin = form.linkedin.value
    const github = form.github.value
    const resume = form.resume.value
    // console.log(linkedin, github, resume)

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    }

    fetch('http://localhost:5000/job-application', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Applied Successfully!',
            text: 'You applied job successfully!',
            icon: 'success',
          })
          navigate('/myApplication')
        }
      })
  }

  return (
    <div>
      <h1 className="flex justify-center my-6 text-4xl font-bold items-center">
        Job Apply. Good Luck !
      </h1>

      <div className=" bg-base-100 w-full  shadow-2xl">
        <div className="card-body">
          <form onSubmit={submitJobApplication} className="fieldset">
            <label className="label">LinkedIn</label>
            <input
              type="url"
              name="linkedin"
              className="w-full input"
              placeholder="LinkedIn URl"
              required
            />
            <label className="label">GitHub</label>
            <input
              type="Url"
              name="github"
              className="w-full input"
              placeholder="Github URL"
              required
            />
            <label className="label">Resume</label>
            <input
              type="Url"
              name="resume"
              className="w-full  input"
              placeholder="Resume URL"
              required
            />

            <button className="btn btn-neutral mt-4">Apply</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default JobApply
