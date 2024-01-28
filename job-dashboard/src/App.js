import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"
import JobTitle from './components/JobTitle';
import Courses from './components/Courses';
import AnalysisResults from './components/AnalysisResults';
import { BarLoader } from 'react-spinners';
function App() {
  const [courses, setCourses] = useState(null);
  const [status,setstatus]=useState(false);
  const [jobDetails,setJobDetails]=useState(null);
  const [Analysis,setAnalysis]=useState(null);
  const jobId = 'd21310ae-834d-490c-a51f-2da69754a2a0';
  const resumeData={
    "resume": {
        "skills": [
        "Python",
        "SQL",
        "Data Visualization Tools",
        "Data Warehousing",
        "ETL Processes",
        "Business Intelligence",
        "Data Modeling & Data Quality frameworks (dbt)",
        "Agile Methodologies (Kanban, Scrum)"
    ],
    "certifications": [],
    "education": [
        {
            "degree": "Master's Degree with Highest Honour in Automation Control",
            "university": "University College London, UK",
            "graduation year": "2019"
        },
        {
            "degree": "Master's Degree with Highest Honour in Computer Science",
            "university": "University College London, UK",
            "graduation year": "2018"
        }
    ]
    },
"job":{

        "jobDetails": "Education\nBachelor's degree in computer science, data engineering, or a related field is often required. Some positions may require a master's degree for more senior roles.\n \nExperience\n2-4 years of experience in data engineering or a related field.\nProficiency in data warehousing, ETL (Extract, Transform, Load) processes, and data integration.\nFamiliarity with data modeling and database management systems (e.g., SQL, NoSQL).\nKnowledge of programming languages such as Python, Java, or Scala.\nHands-on experience with data pipeline tools like Apache NiFi, Apache Beam, or Apache Airflow.\nUnderstanding of big data technologies (e.g., Hadoop, Spark) is often beneficial.\n \nSkills\nStrong SQL skills for querying and manipulating data.\nProficiency in scripting and programming languages for data processing.\nKnowledge of data storage solutions and databases.\nData transformation and data cleansing skills.\nFamiliarity with version control systems like Git.\nUnderstanding of cloud platforms (e.g., AWS, Azure, GCP) and their data services."
    }
};

  useEffect(() => {
    const fetchData = async () => {
        try {
          const result=await axios.get('http://localhost:3001/api/job');
            setAnalysis(result.data);
            console.log(result.data);
            const response1 = await axios.get(`https://freight-service.azurewebsites.net/api/getjobposting?id=${jobId}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    data: jobId,
                },
            });
            setJobDetails(response1.data);
            
            const response2=await axios.post('http://34.224.93.99:5000/courses-matcher/',resumeData,{
              headers: {
                'Content-Type': 'application/json',
            },
            
            })


           
            
            setCourses(response2.data.courses);
           
           
        } catch (error) {
            console.error('Error fetching job data:', error);
        }
    };

    fetchData();
}, []);


  return (
    <div className="App m-5">
      <h2 className='mx-5'>Welcome, James</h2>
      {jobDetails ? (
        <div className='flex flex-col  gap-2 h-auto p-10 mx-5 my-5 rounded-[1rem] bg-white'>
      
          
            <JobTitle jobDetails={jobDetails} status={status} setstatus={setstatus} skills={resumeData.resume.skills} />

      {!status && (
  courses ? (
    <Courses courses={courses} title={jobDetails.jobTitle} />
  ) : (
    <p>
      {status === 'loading' ? <BarLoader /> : 'Fetching Relevant Courses...'}
    </p>
  )
)}

           
               <AnalysisResults Analysis={Analysis} status={status} setstatus={setstatus}/>
        
         
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

