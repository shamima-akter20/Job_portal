import React from 'react'
import { FiCreditCard, FiMail, FiUser, FiUsers } from 'react-icons/fi'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlineTimer } from 'react-icons/md'

const HotJobCard = ({ job }) => {
  const {
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
    <div className="">
      <div className="p-4">
        {/* <p className="text-xl font-semibold mb-2">Settings</p> */}
        <div className="flex ">
          <Card
            image={company_logo}
            title={title}
            subtitle={category}
            location={location}
            company={company}
            jobType={jobType}
            description={description}
            requirements={requirements}
            salary_range={salary_range}
            href="#"
            Icon={FiUser}
          />
          {/* <Card title="Email" subtitle="Manage email" href="#" Icon={FiMail} />
        <Card title="Team" subtitle="Manage team" href="#" Icon={FiUsers} />
        <Card
          title="Billing"
          subtitle="Manage cards"
          href="#"
          Icon={FiCreditCard}
        /> */}
        </div>
      </div>
    </div>
  )
}

const Card = ({
  image,
  title,
  jobType,
  subtitle,
  application_deadline,
  salary_range,
  description,
  company,
  requirements,
  responsibilities,
  status,
  hr_name,
  hr_email,
  location,
  Icon,
  href,
}) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#123458] to-gray-400 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-[#123458] group-hover:rotate-12 transition-transform duration-300" />
      {/* <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" /> */}

      <div className="flex gap-2">
        <div className="">
          {image && (
            <img
              src={image}
              alt="Company Logo"
              className="w-16 h-16 object-contain mb-2 relative z-10"
            />
          )}
        </div>
        <div className="">
          <h3 className="text-lg font-bold text-slate-950 group-hover:text-white relative z-10 duration-300">
            {company}
          </h3>

          <div className="flex items-center">
            <FaLocationDot className="text-slate-400  group-hover:text-base-300 relative z-10 duration-300 h-4 pr-2"></FaLocationDot>
            <p className="text-slate-400 text-sm group-hover:text-base-300 relative z-10 duration-300">
              {location}
            </p>
          </div>
          <div className="flex items-center ">
            <MdOutlineTimer className="text-slate-400  group-hover:text-base-300 relative z-10 duration-300  h-3"></MdOutlineTimer>
            <p className=" mx-[2px] rounded-[4px] text-[10px] text-slate-400 group-hover:text-slate-300 relative z-10 duration-300 ">
              {jobType}
            </p>
          </div>
        </div>
      </div>

      <div className="">
        {/* --- job subtitle ---- */}
        <p className="text-black-500 group-hover:text-base-300 relative z-10 duration-300">
          {subtitle}
        </p>
        {/* --- job description --- */}
        <p className="text-slate-400 my-2 text-sm group-hover:text-base-300 relative z-10 duration-300">
          {description}
        </p>
        {/* ---  salary --- */}
        <p className="text-slate-600 my-2 text-sm group-hover:text-base-300 relative z-10 duration-300">
          Salary : {salary_range.max} - {salary_range.min}
        </p>
        {/*--- job skill ----  */}
        <div className="flex flex-wrap my-2 gap-2 text-xs group-hover:text-black-300 relative z-10">
          {requirements.map((skill) => (
            <p className=" border rounded p-[3px] group-hover:text-slate-200 relative z-10">
              {skill}
            </p>
          ))}
        </div>
      </div>
    </a>
  )
}

export default HotJobCard
