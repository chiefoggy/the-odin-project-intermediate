import { useState } from "react";

const PracticalExperience = ( { onAdd } ) => {
    const [form, setForm] = useState({
        company: '',
        position: '',
        responsibilities: '',
        startDate: '',
        endDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({...form, id: crypto.randomUUID()});

        setForm({
        company: '',
        position: '',
        responsibilities: '',
        startDate: '',
        endDate: ''
        });
    }

    return (
        <div>
            <h2>Practical Experience</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input 
                            type='text'
                            name='company'
                            placeholder="Company Name"
                            value={form.company}
                            onChange={handleChange}
                        />

                        <input 
                            type='text'
                            name='position'
                            placeholder="Position"
                            value={form.position}
                            onChange={handleChange}
                        />

                        <input 
                            type='text'
                            name='responsibilities'
                            placeholder="Responsibilities"
                            value={form.responsibilities}
                            onChange={handleChange}
                        />

                        <label>Start Date</label>
                        <input 
                            type='date'
                            name='startDate'
                            value={form.startDate}
                            onChange={handleChange}
                        />

                        <label>End Date</label>
                        <input 
                            type='date'
                            name='endDate'
                            value={form.endDate}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit">Add Experience</button>  
                </form>
            </div>
        </div>
    )
};



export default PracticalExperience;