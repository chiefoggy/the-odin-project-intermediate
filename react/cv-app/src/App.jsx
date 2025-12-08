import { useState } from 'react';
import './App.css'
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import PracticalExperience from './PracticalExperience';

function App() {

  const [generalInfo, setGeneralInfo] = useState({name: '', email: '', No: ''});
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);

  const addEducation = (newEducation) => {
    setEducationList([...educationList, newEducation]);
  };

  const addExperience = (newExperience) => {
    setExperienceList([...experienceList, newExperience]);
  };
  
  
  return (
    <>
      <h1>CV Builder</h1>
      <GeneralInfo 
        data = {generalInfo}
        onChange = {setGeneralInfo}
      />
      <Education onAdd={addEducation}/>
      <PracticalExperience onAdd={addExperience}/>

      <div className="resume-header">
        <h1>{generalInfo.name}</h1>
        <h2>{generalInfo.email} | {generalInfo.phoneNo}</h2>
      </div>

      <div className="education-display">
        <h2>Educational History</h2>
        {educationList.map((edu) => (
          <div key={edu.id} className="education-item">
            <h3>{edu.school}</h3>
            <p>{edu.date}</p>
            <p>{edu.study}</p>
          </div>
        ))}
      </div>

      <div className="experience-display">
        <h2>Practical Experience</h2>
        {experienceList.map((exp) => (
          <div key={exp.id} className="experience-item">
            <strong><h3>{exp.company}</h3></strong>
            <h3>{exp.startDate} - {exp.endDate}</h3>
            <h3>{exp.position}</h3>
            <h3>{exp.responsibilities}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;
