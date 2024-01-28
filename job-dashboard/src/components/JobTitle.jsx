import React from 'react'

const JobTitle = ({jobDetails,status,setstatus,skills}) => {
  return (<>
   <div className='flex flex-col items-center justify-between  sm:flex-row'>
  {/* Job Title Section */}
        <div className='flex flex-col'>
        <div className='flex '>
          <h1 className="text-lg font-bold mb-4">Name: </h1>
          <span className='text-lg mx-1 pt-[1px]'> {jobDetails.neomDivision}</span>
        </div>
        <div className='flex '>
          <h1 className="text-lg font-bold mb-4">Job Title: </h1>
          <span className='text-lg mx-1 pt-[1px]'> {jobDetails.jobTitle}</span>
        </div>
        <div className='flex '>
          <h1 className="text-lg font-bold mb-4">Job Type: </h1>
          <span className='text-lg mx-1 pt-[1px]'> {jobDetails.jobType}</span>
        </div>
        </div>

        {/* Status Indicator Section */}
        <div onClick={() => setstatus(!status)} className="bg-cyan-400 flex items-center justify-center w-[80px] h-[80px] hover:bg-cyan-500 text-white p-2 rounded-[50%] items-center justify-center cursor-pointer">
          <div className="rounded-[50%] w-[60px] h-[60px] bg-white flex items-center justify-center">
            <span className="text-cyan-400 text-2xl font-bold">80</span>
          </div>
        </div>
</div>
{!status &&
<div>
    {/* Job Description */}
    <h1 className="text-lg font-bold mb-4">Job Description:</h1>
    <p className="mb-4 text-lg">{jobDetails.jobDetails}:</p>
  
    {/* Job Skills */}
    <div className="mb-4">
      <h2 className="font-bold mb-2">Job Skills:</h2>
      <ul className='grid grid-cols-2 md:grid-cols-3'>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  
    {/* Apply Button */}
    <div className='flex justify-center '>
      <button type="button" className="text-white w-[30%] bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-5">
        Apply now
      </button>
    </div>
  
    {/* Related Courses */}
    {/* <div>
      <h2 className="font-bold mb-2 text-lg">Courses Related to Job {jobData.title}</h2>
      <div className="courses mx-5 grid grid-cols-3 gap-3">
        {jobData.map((course, index) => (
          <div className="max-w-[15rem] flex flex-col gap-3 p-2 bg-gray-100 border border-gray-200 cursor-pointer md:p-8" key={index}>
            <img src={course.course_image} alt='img' />
            <a href={course.course_url} target='blank'>
              <p className="mb-2 text-[12px] text-center font-bold tracking-tight text-gray-900 dark:text-white relative md:text-lg">{course.course_title}</p>
            </a>
          </div>
        ))}
      </div>
    </div> */}
  </div>
}

    
    </>
  )
}

export default JobTitle