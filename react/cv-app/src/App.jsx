import { useState } from 'react';
import './App.css'
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import PracticalExperience from './PracticalExperience';

function App() {

  const [generalInfo, setGeneralInfo] = useState({name: '', email: '', phoneNo: '', bio: ''});
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  
  // New State to handle the toggle
  const [isEditing, setIsEditing] = useState(true);

  const addEducation = (newEducation) => {
    setEducationList([...educationList, newEducation]);
  };

  const addExperience = (newExperience) => {
    setExperienceList([...experienceList, newExperience]);
  };
  
  return (
    <div className="app-container">
      {/* Navigation Bar / Header */}
      <nav className="navbar">
        <h1>CV Builder</h1>
        <button 
          className="toggle-btn"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Preview CV" : "Back to Editor"}
        </button>
      </nav>

      {/* Conditional Rendering based on isEditing state */}
      {isEditing ? (
        /* --- EDIT MODE --- */
        <div className="edit-mode">
          <GeneralInfo 
            data={generalInfo}
            onChange={setGeneralInfo}
          />
          <Education onAdd={addEducation}/>
          <PracticalExperience onAdd={addExperience}/>
        </div>
      ) : (
        /* --- PREVIEW MODE --- */
        <div className="preview-mode">
          <div className="resume-paper">
            <div className="resume-header">
              <h1>{generalInfo.name}</h1>
              <div className="contact-info">
                 <span>{generalInfo.email}</span>
                 {generalInfo.email && generalInfo.phoneNo && <span> | </span>}
                 <span>{generalInfo.phoneNo}</span>
              </div>
              <p className="bio">{generalInfo.bio}</p>
            </div>
            
            <hr />

            <div className="education-display">
              <h2>Educational History</h2>
              {educationList.length > 0 ? (
                educationList.map((edu) => (
                  <div key={edu.id} className="education-item">
                    <div className="item-header">
                      <h3>{edu.school}</h3>
                      <span>{edu.startDate} {edu.endDate && `- ${edu.endDate}`}</span>
                    </div>
                    <p className="study-title">{edu.study}</p>
                  </div>
                ))
              ) : <p>No education added yet.</p>}
            </div>

            <hr />

            <div className="experience-display">
              <h2>Practical Experience</h2>
              {experienceList.length > 0 ? (
                experienceList.map((exp) => (
                  <div key={exp.id} className="experience-item">
                    <div className="item-header">
                      <h3>{exp.company}</h3>
                      <span>{exp.startDate} {exp.endDate && `- ${exp.endDate}`}</span>
                    </div>
                    <p className="position-title"><strong>{exp.position}</strong></p>
                    <p className="responsibilities">{exp.responsibilities}</p>
                  </div>
                ))
              ) : <p>No experience added yet.</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App;