const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
const port = 3001;
// Here I am using Sample data (replace with actual data fetching logic)
const jobData = {
    skills: ['JavaScript', 'React', 'Node.js','Angular','React-Native','SQL'],
    courses:[{"course_title":"Oracle AI Foundations",
    "course_image": "https://education.oracle.com/file/general/Oracle_University_Generic_Badge.png",
    "course_url": "https://www.udemy.com/course/1z0-1122-23-oci-2023-ai-foundation-trial/"},{"course_title":"Oracle AI Foundations",
    "course_image": "https://education.oracle.com/file/general/Oracle_University_Generic_Badge.png",
    "course_url": "https://www.udemy.com/course/1z0-1122-23-oci-2023-ai-foundation-trial/"},{"course_title":"Oracle AI Foundations",
    "course_image": "https://education.oracle.com/file/general/Oracle_University_Generic_Badge.png",
    "course_url": "https://www.udemy.com/course/1z0-1122-23-oci-2023-ai-foundation-trial/"}],
    
    percentage:'80',
    analysisResult:[{value:'Summary',percentage:'90'},{value:'Experience',percentage:'80'},{value:'Skills',percentage:'80'},{value:'Certification',percentage:'0'},{value:'Education',percentage:'80'},{value:'Publications',percentage:'95'}]
  };
  
  // API endpoint to fetching  job data
  app.get('/api/job', (req, res) => {
    res.json(jobData);
  });
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });