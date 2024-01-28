import React from 'react'
const Courses = ({courses,title}) => {
  return (
    <div>
  
    {/* Related Courses */}
    <div>
      <h2 className="font-bold mb-2 text-lg">Courses Related to Job {title}</h2>
      <div className="courses mx-5 grid grid-cols-3 gap-3">
        {courses.map((course, index) => (
          <div className="max-w-[15rem] flex flex-col gap-3 p-2 bg-gray-100 border border-gray-200 cursor-pointer md:p-8" key={index}>
            <img src={course.course_image} alt='img' />
            <a href={course.course_url} target='blank'>
              <p className="mb-2 text-[12px] text-center font-bold tracking-tight text-gray-900 dark:text-white relative md:text-lg">{course.course_title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  )
}

export default Courses;