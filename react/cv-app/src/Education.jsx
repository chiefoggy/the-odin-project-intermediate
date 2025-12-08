import { useState } from "react";

const Education = ({onAdd}) => {
    const [form, setForm] = useState({
        school: '',
        study: '', 
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({...form, id: crypto.randomUUID()});
        setForm({ school: '', study: '', date: '' });
    };

    return (
        <div className="card">
            <h2 className="card-title">Education</h2>

            <form onSubmit={handleSubmit} className="card-grid">
                <div className="form-group">
                    <input 
                        type='text'
                        name='school'
                        placeholder="School Name"
                        value={form.school}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <input 
                        type='text'
                        name='study'
                        placeholder="Course of Study"
                        value={form.study}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Start Date: </label>
                    <input 
                        type='date'
                        name='startDate'
                        value={form.startDate}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>End Date: </label>
                    <input 
                        type='date'
                        name='endDate'
                        value={form.endDate}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit full-width">Add</button>
            </form>
        </div>
    )
};

export default Education;