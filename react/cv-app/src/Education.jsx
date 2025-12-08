import { useState } from "react";

const Education = () => {
    const [schoolName, setSchoolName] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [dateOfStudy, setDateOfStudy] = useState('');

    return (
        <div>
            <form>
                <div>
                    <input 
                        type='text'
                        placeholder="School Name"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                    />
                </div>

                <div>
                    <input 
                        type='text'
                        placeholder="Title Of Study"
                        value={titleOfStudy}
                        onChange={(e) => setTitleOfStudy(e.target.value)}
                    />
                </div>

                <div>
                    <input 
                        type='text'
                        placeholder="Date Of Study"
                        value={dateOfStudy}
                        onChange={(e) => setDateOfStudy(e.target.value)}
                    />
                </div>
            </form>

            <h2>School name: 
                <strong> {schoolName}</strong>
            </h2>
            <p>Title Of Study:
                <strong> {titleOfStudy}</strong>
            </p>
            <p>Date Of Study: 
                <strong> {dateOfStudy}</strong>
            </p>
        </div>
    )
}

export default Education;