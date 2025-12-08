import { useState } from "react";

const PracticalExperience = () => {

    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [startDate, setStartDate] = useState(''); 
    const [endDate, setEndDate] = useState(''); 

    return (
        <div>
            <h2>Practical Experience</h2>
            <form>
                <div>
                    <input 
                        type='text'
                        placeholder="Company Name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </div>

                <div>
                    <input 
                        type='text'
                        placeholder="Position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                </div>

                <div>
                    <input 
                        type='text'
                        placeholder="Responsibilities"
                        value={responsibilities}
                        onChange={(e) => setResponsibilities(e.target.value)}
                    />
                </div>

                <div>
                    <label>Start date: </label>
                    <input 
                        type='date'
                        placeholder="Start Date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                <div>
                    <label>End date: </label>
                    <input 
                        type='date'
                        placeholder="End Date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>      
            </form>

            <div className="display-practical-experience">
                <h1>
                    <strong>{company}</strong>- {position} <br />
                </h1>
                <p>Period: {startDate} - {endDate}</p>
                <p>Responsibilities: {responsibilities}</p>
            </div>

        </div>
    )
}

export default PracticalExperience;